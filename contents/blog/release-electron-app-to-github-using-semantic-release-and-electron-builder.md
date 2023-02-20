---
slug: 'release-electron-app-to-github-using-semantic-release-and-electron-builder'
title: 'Release Electron App To GitHub Using Semantic Release And Electron Builder'
isPublished: true
publishedAt: '2023-02-20'
tags:
  - 'electronjs'
  - 'react'
  - 'vite'
  - 'electron builder'
---

I have been working on a personal desktop project ([Deskaide](https://github.com/deskaide/deskaide)) for about one year and finished some basic features recently. So I decided to publish an alpha version to GitHub. Instead of upgrading the version number and publishing it manually, I was looking for a way to automate the process. 

The template I was following to structure the project uses electron builder to build the project. It uses the current date as the upcoming version number. It seems okay, but the version number does not indicate what type of changes it includes. I believe [semantic-release](https://github.com/semantic-release/semantic-release) has the solution, and I used it in some of my other projects.

I started exploring a solution. I found an [electron release plugin](https://github.com/mystster/semantic-release-github-electron-builder) for the semantic release package but found it complicated. I decided to hack the semantic release process and use it only to update the version number (it can publish) and push the tag to GitHub. Electron builder can publish the release to GitHub, so I don't need any extra hacking to publish the release. The process looks like this:

- Configure semantic release
- Prepare the npm script
- Configure GitHub action

Let's explore the process in detail.

## Configure semantic release

First, we will install `semantic-release` as a dev dependency with other related plugins.

```sh
npm i -D semantic-release @semantic-release/commit-analyzer @semantic-release/npm @semantic-release/git semantic-release-export-data
```

Now we need to configure it in such a way that it will calculate the upcoming version number from the commit message and expose it to the GitHub workflow environment. We need to add the following code in a file named `release.config.js` at the root of our project folder.

```js
module.exports = {
  branches: [
    'main',
    'next',
    'next-major',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    'semantic-release-export-data',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json'],
      },
    ],
  ],
};
```

Here [semantic-release-export-data](https://github.com/felipecrs/semantic-release-export-data) plugin will help us to expose the next release version to the GitHub
action environment. We will use that version number to name our releases in the build step.

## Prepare the npm script

We need an npm script to run the `semantic-release` command. In our `package.json` in the scripts section, we will add the following commands:

```json
"release": "electron-builder --config .electron-builder.config.js --publish always",
"updateVersion": "semantic-release"
```

In the `release` script, we added `--publish always` to tell electron builder to publish it to GitHub.

## Configure GitHub action

Now we will configure our GitHub workflow to combine all the steps. 

- First, we will set up a job to run semantic-release in dry mode to expose  the upcoming version number (if releasable) to the GitHub action environment (job name `get-next-version`)
- Then, we will  create a release draft with a release note (job name `draft`)
- Finally, we will build the production release and upload the artifacts to GitHub (job name `upload_artifacts`).

Before building the production release, we will run the `updateVersion` script we defined earlier. It will generate the upcoming version number and tag and push the version tag to GitHub. Then we will put the version number in a file named `meta.json` inside our `buildResources` folder at the root of our project. Finally, we will build our project for production and run the `release` script to release the app to GitHub. Following is the complete workflow configuration:

```yaml
name: Release A New Version
on: [workflow_call, workflow_dispatch]

concurrency:
  group: release-${{ github.ref }}
  cancel-in-progress: true

defaults:
  run:
    shell: 'bash'
env:
  GH_TOKEN: ${{ secrets.github_token }}

jobs:
  get-next-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm ci
        env:
          PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD: 1
      - run: npx semantic-release --dry-run
        id: get-next-version
        env:
          GITHUB_TOKEN: ${{ secrets.github_token }}
    outputs:
      new-release-published: ${{ steps.get-next-version.outputs.new-release-published }}
      new-release-version: ${{ steps.get-next-version.outputs.new-release-version }}

  draft:
    needs: [get-next-version]
    runs-on: ubuntu-latest
    if: needs.get-next-version.outputs.new-release-published == 'true'
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Show version
        run: echo "Next Version is ${{ needs.get-next-version.outputs.new-release-version }} (${{ github.ref_name }})"

      - name: Get last git tag
        id: tag
        run: echo "last-tag=$(git describe --tags --abbrev=0 || git rev-list --max-parents=0 ${{github.ref}})" >> $GITHUB_OUTPUT

      - name: Generate release notes
        uses: ./.github/actions/release-notes
        id: release-note
        with:
          from: ${{ steps.tag.outputs.last-tag }}
          to: ${{ github.ref }}
          include-commit-body: true
          include-abbreviated-commit: true

      - name: Delete outdated drafts
        uses: hugo19941994/delete-draft-releases@v1.0.0
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Create Release Draft
        uses: softprops/action-gh-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.github_token }}
        with:
          prerelease: true
          draft: true
          tag_name: v${{ needs.get-next-version.outputs.new-release-version }}
          name: v${{ needs.get-next-version.outputs.new-release-version }}
          body: ${{ steps.release-note.outputs.release-note }}
    outputs:
      release-note: ${{ steps.release-note.outputs.release-note }}
      version: ${{ needs.get-next-version.outputs.new-release-version }}

  upload_artifacts:
    needs: [draft]

    strategy:
      matrix:
        os: [macos-latest, ubuntu-latest, windows-latest]

    runs-on: ${{ matrix.os }}

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: 'npm'

      - run: npm ci
        env:
          PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD: 1

      - name: Prepare release notes
        env:
          RELEASE_NOTE: ${{ needs.draft.outputs.release-note }}
        run: echo "$RELEASE_NOTE" >> ./buildResources/release-notes.md

      - name: Show version
        run: echo "Next Version is ${{ needs.draft.outputs.version }} (${{ github.ref_name }})"

      - name: Update and push version tag
        run: npm run updateVersion

      - name: Write next version to meta.json
        run: echo "{\"version\":\"${{ needs.draft.outputs.version }}\"}" >| ./buildResources/meta.json

      - name: Build the app
        env:
          MODE: 'production'
        run: npm run build

      - name: Compile & release Electron app
        id: release-to-github
        env:
          VITE_APP_VERSION: ${{ needs.draft.outputs.version }}
        run: npm run release

      - name: Delete tag for failed release
        if: steps.release-to-github.outcome == 'failure'
        run: git push --delete origin v${{ needs.draft.outputs.version }}```
```

If you want to see the complete process in action or want to contribute to the open source `Deskaide` project, please check out the [repository](https://github.com/deskaide/deskaide) here.

## Hard Lesson

> If you use modular GitHub workflows (different jobs in different files) and any lower-level actions need to access any secret value, you must tell the root workflow to pass the secret value to that action.

In my `ci.yaml` file:

```yaml
# This workflow is the entry point for all CI processes.
# It is from here that all other workflows launch.
on:
  push:
    branches:
      - main
      - alpha
      - beta
    paths-ignore:
      - '**.md'
      - .editorconfig
      - .gitignore
  pull_request:
    paths-ignore:
      - '**.md'
      - .editorconfig
      - .gitignore

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

jobs:
  lint:
    uses: ./.github/workflows/lint.yml
  typechecking:
    uses: ./.github/workflows/typechecking.yml
  tests:
    uses: ./.github/workflows/tests.yml
  draft_release:
    if: github.event_name == 'push' && (github.ref_name == 'alpha' || github.ref_name == 'beta' || github.ref_name == 'main')
    needs: [typechecking, tests]
    uses: ./.github/workflows/release.yml
    secrets: inherit # <- THIS IS WHAT I AM TALKING ABOUT
```

Thanks a lot for reading the post, and please share if you find it useful.
