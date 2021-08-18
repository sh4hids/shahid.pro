const fs = require('fs');
const inquirer = require('inquirer');
const jsToYaml = require('json-to-pretty-yaml');
const prettier = require('prettier');
const chalk = require('chalk');
const { format } = require('date-fns');
const YAML = require('yamljs');
const toKebabCase = require('@sh4hids/gatsby-theme-open-sourcerer/src/utils/toKebabCase');
const toTitleCase = require('@sh4hids/gatsby-theme-open-sourcerer/src/utils/toTitleCase');

const log = console.log;
const error = chalk.bold.red;
const success = chalk.bold.green.inverse;

(async () => {
  const args = process.argv;
  if (args.length < 3) {
    const { title, tags, isPublished } = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Post Title:',
      },
      {
        type: 'input',
        name: 'tags',
        message: 'Tags (comma separated):',
      },
      {
        type: 'list',
        name: 'isPublished',
        message: 'Choose a post status:',
        choices: [
          { name: 'Published', value: true },
          { name: 'Draft', value: false },
        ],
      },
    ]);

    console.log({ title, isPublished, tags });

    const slug = toKebabCase(title);
    const publishedAt = new Date();
    const blogPostFolder = `./contents/blog`;
    const tagsList = tags.split(',').map((t) => t.trim());

    const yaml = jsToYaml.stringify({
      slug,
      title: toTitleCase(title),
      isPublished: isPublished,
      publishedAt: format(publishedAt, 'yyyy-MM-dd'),
      tags: tagsList,
    });

    const markdown = prettier.format(`---\n${yaml}\n---\n`, {
      parser: 'markdown',
      singleQuote: true,
    });

    fs.writeFileSync(`${blogPostFolder}/${slug}.md`, markdown);

    log(
      success(
        `Post with title "${toTitleCase(title)}" was created successfully`
      )
    );
  } else {
    log(error("Please don't provide any arguments to the new post generator"));
  }
})();
