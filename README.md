# Advent of code

My solutions to the [Advent of code](http://adventofcode.com/)
challenges, in javascript.

## Setup

You need to have node installed. I recommend using
[nvm](https://github.com/creationix/nvm) to install it.

After you have node, run:

```
> $ npm i
> $ npm i -g babel-cli
```

## Testing the solutions

In the repository root, run:

```
> $ babel-node adventofcode.js <day> <part> [<input_file_location>]
```

`input_file_location` is optional, and the `input` file inside the
selected day directory will be used by default.

Examples:

```
> $ babel-node adventofcode.js 01 1
> $ babel-node adventofcode.js 03 2
> $ babel-node adventofcode.js 04 1
> $ babel-node adventofcode.js 04 2 './04/input'
```
