import chalk from 'chalk';
import { format } from 'date-fns';
import { writeFileSync } from 'fs';
import inquirer from 'inquirer';
import { stringify } from 'json-to-pretty-yaml';
import path from 'path';
import { format as _format } from 'prettier';
import { titleCase } from 'title-case';
import { fileURLToPath } from 'url';

const log = console.log;
const error = chalk.bold.red;
const info = chalk.bold.cyan;
const success = chalk.bold.green.inverse;

(async () => {
    const args = process.argv;
    if (args.length < 3) {
        const { name, description, url, github, isPublished } =
            await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Project Name:',
                },
                {
                    type: 'input',
                    name: 'description',
                    message: 'Project summary:',
                },
                {
                    type: 'input',
                    name: 'url',
                    message: 'Project url:',
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Project repo:',
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

        log(info({ name, description, isPublished, url, github }));

        const __dirname = path.dirname(fileURLToPath(import.meta.url));
        const publishedAt = new Date();
        const slug = `${name
            .trim()
            // eslint-disable-next-line no-useless-escape
            .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
            .replace(/\s+/g, '-')
            .toLowerCase()}`;
        const projectFolder = `../src/content/projects`;
        const filePath = path.join(__dirname, projectFolder, `${slug}.json`);

        const data = JSON.stringify({
            name: name.toLowerCase(),
            description: description,
            url: url,
            github: github,
            createdAt: publishedAt.toJSON(),
            updatedAt: publishedAt.toJSON(),
            isPublished: isPublished,
        });

        const json = await _format(data, {
            parser: 'json',
            tabWidth: 4,
        });

        writeFileSync(filePath, json);

        log(
            success(
                `Post with title "${titleCase(name)}" was created successfully`
            )
        );
    } else {
        log(
            error(
                "Please don't provide any arguments to the new post generator"
            )
        );
    }
})();
