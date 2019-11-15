const fs = require('fs');
const inquirer = require('inquirer');
const jsToYaml = require('json-to-pretty-yaml');
const prettier = require('prettier');
const chalk = require('chalk');
const log = console.log;
const error = chalk.bold.red;
const success = chalk.bold.green.inverse;

(async () => {
  const args = process.argv;
  if (args.length < 3) {
    const { title, language = 'en' } = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Post Title:',
      },
      {
        type: 'list',
        name: 'language',
        message: 'Choose a language:',
        choices: ['en', 'bn'],
      },
    ]);

    const slug = title
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
    const createdOn = new Date();
    const blogPostFolder = `./content/blog/${slug}`;

    if (!fs.existsSync(blogPostFolder)) {
      fs.mkdirSync(blogPostFolder, {
        recursive: true,
      });
    }

    const yaml = jsToYaml.stringify({
      title,
      date: createdOn.toISOString(),
      published: false,
      language,
    });

    const markdown = prettier.format(`---\n${yaml}\n---\n`, {
      parser: 'markdown',
      singleQuote: true,
    });

    fs.writeFileSync(`${blogPostFolder}/index.md`, markdown);

    log(success(`Post ${title} was created successfully`));
  } else {
    log(error("Please don't provide any arguments to the new post generator"));
  }
})();
