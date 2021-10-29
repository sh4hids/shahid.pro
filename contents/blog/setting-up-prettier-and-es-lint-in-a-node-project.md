---
slug: 'setting-up-es-lint-and-prettier-in-a-node-project'
title: 'Setting Up ESLint And Prettier In A Node Project'
isPublished: true
publishedAt: '2021-10-29'
tags:
  - 'javascript'
  - 'prettier'
  - 'eslint'
---

One of the best ways to make a codebase maintainable and consistent is to follow a proper code formatting and coding style. In a codebase with only one contributor, IDE can do the task of code formatting and linting (with some configuration and plugins). But where there are multiple contributors, maintaining proper formatting and linting is very difficult without any automated process. Everyone has their preferences regarding code formatting and coding style.

In this post, I will try to show the step-by-step process of setting up prettier and eslint.

## Setting Up ESLint and Prettier

ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code. It was created by Nicholas C. Zakas in 2013. Rules in ESLint are configurable, and customized rules can be defined and loaded. ESLint covers both code quality and coding style issues. [[Wikipedia](https://en.wikipedia.org/wiki/ESLint)]

There are many popular style guides for JavaScript. We will be using the one provided by Airbnb ([Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)). You can initialize the setup process by running the following command in your project folder.

```bash
$ npx eslint --init
```

There will be a prompt asking some questions regarding the configurations. Choose the options necessary based on your project.

We need a few more packages for eslint to work with prettier. Run the following command in your terminal/cmd.

```bash
$ npm i -D eslint-plugin-prettier prettier @trivago/prettier-plugin-sort-imports eslint-config-prettier
```

Now open `.eslintrc.js` in your text editor and customize the configuration to match the following. You can add or customize any rules here.

```js
module.exports = {
  // other config
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  // other config
  rules: {
    'prettier/prettier': ['error'],
  },
};
```

Now create a file named `.prettierrc.js` and paste the following code. You can customize the settings as your project needs.

```js
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  experimentalBabelParserPluginsList: ['classProperties'],
};
```

In your favorite text editor, add the prettier and eslint plugin and enable format on save option. Now prettier will format code on saving, eslint will show warning or error if there is any problem in your code.

You can add the following scripts in your `package.json` file. So that whenever you want to format or lint the entire codebase, you only have to run an npm command.

```json
{
  "scripts": {
    // other scripts
    "prettier": "prettier --ignore-path .gitignore \"**/*.+(js|json)\"",
    "check-format": "npm run prettier -- --list-different",
    "format": "npm run prettier -- --write",
    "lint": "eslint --ignore-path .gitignore --ext .js"
  }
}
```

In another post, I will try to show how to automate the process of linting and code formatting of the entire codebase before each commit to git.
