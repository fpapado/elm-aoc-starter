# Elm Advent of Code Starter

This is a simple setup for starting to solve [Advent of Code][aoc] problems in [Elm][elm].

## What problem this addresses

Advent of Code problems often take their input from a file.
In Elm, we don't have a filesystem!
This setup allows reading the input using [Elm flags][elm-flags].

Similarly, we set up tests with [`elm-test`][elm-test], so you can view your code on the command line, rather than having to set up a format for the browser.

You could do all of those things manually, or in a browser, or through the test interface. This is meant to be a starting point!

## Quick Start

You will need [Node][node] and [npm][npm].\* npm comes installed with Node.
It should not matter much which versions, though either way I'd recommend you use [nvm][nvm] to install Node. It works better without needing admin privileges for every npm installation.

You will also need [git][git].

Then, in a terminal, like iterm or gnome terminal, run:

```shell
npx degit fpapado/elm-aoc-starter aoc-2019-elm
cd aoc-2019-elm
npm ci
npm test
```

## Structure / Solving Advent of Code Problems

Adding a solution works as follows:

- Copy the input that Advent of Code gives you to `inputs/dayX.txt`
- Add your solution in an Elm module under `src`. I call them `DayX.elm`, but you can pick anything.
- In `Main.elm`, import your module, and change the pattern match in `init` to call the respective function for the day and part.
- Run `npm run solve day part`, e.g. `npm run solve 1 1`, in a terminal

If you want to run tests:

- Add a test module under `tests`, for example `tests/Day1Test.elm`
- Write tests as you want :)
- Run `npm run test` or `elm-test` directly, in a terminal

## Other notes

### \*On needing Node

Node is used for the CLI toolchain and the test runner.
The Elm compiler can very well be run by itself, without needing Node :)

[aoc]: https://adventofcode.com/
[elm]: https://elm-lang.org/
[elm-test]: https://github.com/elm-explorations/test
[elm-flags]: https://guide.elm-lang.org/interop/flags.html
[node]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[nvm]: https://github.com/nvm-sh/nvm#installation-and-update
[git]: https://help.github.com/en/github/getting-started-with-github/set-up-git
