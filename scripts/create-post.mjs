import { writeFileSync } from 'fs';
import inquirer from 'inquirer';
import { stringify } from 'json-to-pretty-yaml';
import { format as _format } from 'prettier';
import chalk from 'chalk';
import { titleCase } from 'title-case';
import { format } from 'date-fns';

const log = console.log;
const error = chalk.bold.red;
const info = chalk.bold.cyan;
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
                name: 'description',
                message: 'Post summary:',
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

        log(info({ title, isPublished, tags }));

        const publishedAt = new Date();
        const slug = `${format(publishedAt, 'yyyy/MM/dd')}/${title
            .trim()
            .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
            .replace(/\s+/g, '-')
            .toLowerCase()}}`;
        const blogPostFolder = `./src/content/blog`;
        const tagsList = tags.split(',').map((t) => t.trim());

        const yaml = stringify({
            slug,
            title: titleCase(title),
            isPublished: isPublished,
            createdAt: publishedAt.toJSON(),
            tags: tagsList,
        });

        const markdown = _format(`---\n${yaml}\n---\n`, {
            parser: 'markdown',
            singleQuote: true,
        });

        writeFileSync(`${blogPostFolder}/${slug}.md`, markdown);

        log(
            success(
                `Post with title "${titleCase(title)}" was created successfully`
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
