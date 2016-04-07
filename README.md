# standart

A linter that helps make your code look like _art_ that _stand_ s on it's own

[standard](https://github.com/feross/standard) with a few exceptions, most importantly:

- **comma-first** allowed
- any rules conflicting with formatting code in a tabular manner were removed

## Installation

    npm install standart

## Usage

```
standart
```

### [Vim](http://www.vim.org/)

Install **[Syntastic][vim-1]** and add these lines to `.vimrc`:

```vim
let g:syntastic_javascript_checkers=['standard']
let g:syntastic_javascript_standard_exec = 'standart'
```

For automatic formatting on save, add these two lines to `.vimrc`:

[vim-1]: https://github.com/scrooloose/syntastic

### Ignoring files

Just like in `standard`, The paths `node_modules/**`, `*.min.js`, `bundle.js`, `coverage/**`, hidden files/folders
(beginning with `.`), and all patterns in a project's root `.gitignore` file are
automatically excluded when looking for `.js` files to check.

Sometimes you need to ignore additional folders or specific minfied files. To do that, add
a `standart.ignore` property to `package.json`:

```json
"standart": {
  "ignore": [
    "**/out/",
    "/lib/select2/",
    "/lib/ckeditor/",
    "tmp.js"
  ]
}
```

## License

MIT
