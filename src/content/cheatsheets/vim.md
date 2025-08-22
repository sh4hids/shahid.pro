---
title: 'VIM Cheat Sheet'
description: 'Some useful VIM commands'
isPublished: true
publishedAt: '2025-08-13T07:45:29.958Z'
---

## Movement

- Page Up: `Ctrl+u`
- Page Down: `Ctrl+d`

- Paragraph Up: `{`
- Paragraph Down: `}`

- Viewport Top: `H`
- Viewport Middle: `M`
- Viewport Top: `L`

- Start of the file: `gg`
- Start of the file: `G`
- Specific line: `nG` or `:n<enter>`

- Start of the line: `0`
- End of the line: `$`
- Non-whitespace start of the line: `^` or `0w`

- Start of the next word: `w`
- Start of the previous word: `b`
- End of the current word: `e`

## Editing

- Append after current character: `a`
- Append at the end of a line: `A`
- Append at the start of a line: `I`
- Insert new line below: `o`
- Insert new line above: `O`

- Delete a single character: `x`
- Delete a word: `dw`
- Delete current line: `dd`
- Delete word and go to insert mode: `ce`
- Delete up to end and go to insert mode: `c$`
- Delete current line and go to insert mode: `cc`
- Delete entire word and go to insert mode: `ciw`
- Delete everything inside and go to insert mode: `ci<any pair of symbol>`
- Delete everything inside current tag and go to insert mode: `cit`
- Delete everything inside with symbol and go to insert mode: `ca<any pair of symbol>`
- Delete everything inside matching breaket and go to insert mode: `c%`
- Delete everything upto given char: `ct<char>`
- Delete everything upto given char: `cf<char>`
- Delete everything upto given char: `c/<text>`

- Replace single character: `r`

## Copy/Pasting

- Copy to register a: `"ay`
- Copy to register b: `"by`
- Copy to `+` register or system clipboard: `"+y`
- Paste from register a: `"ap`
- Paste from register b: `"bp`

## Formatting

- First got visual mode `v` and then press `>` or `<` to indent or outdent

## Folding code

- Create folding: `zf` (movement can also be used after zf)
- Delete fold: `zd`
- Open fold: `zo`
- Close fold: `zc`
