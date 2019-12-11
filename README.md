# Elm Advent of Code Starter

This is a simple setup for starting to solve [Advent of Code](aoc) problems in Elm.

## What problem this addresses
Advent of Code problems often take their input from a file.
In Elm, we don't have a filesystem!
This setup allows reading the input using [Elm flags](elm-flags).

Similarly, we set up tests with `elm-test`, so you can view your code on the command line, rather than having to set up a format for the browser.

## Quick Start

### Option 1: Using git only
You will need [git](git).

Then, in a terminal, like iterm or gnome terminal, run:

```shell
git clone https://github.com/fpapado/elm-aoc-starter
```

### Option 2: Using `npm init`
You will need [Node](node) and [npm](npm).
It should not matter much which versions, though either way I'd recommend you use [nvm](nvm) to install Node. It works better without needing admin privileges for every npm installation.

Then, in a terminal, like iterm or gnome terminal, run:

```shell
npm init elm-aoc
```

The files should be under the `elm-aoc` directory.

## Structure / Solving Advent of Code Problems

- Main.elm
- Day1.elm
- Day2.elm
- DayXY.elm
- Change the import in Main.elm
- Run tests with `elm test` or `npm test`
- npm run solve XY
