const path = require('path');
const fs = require('fs');
const meow = require('meow');

// There is an assumption here about the directory the Elm program gets built at :)
const {Elm} = require('./build/elm');

/**
 * This script is responsible for running the compiled Elm program from the command line.
 * It does three things:
 * - Gets the desired day and part to solve
 * - Gets the input for that day, and passes it to the Elm program as a flag
 * - Runs the program, and prints out the result
 *
 * You could do all of those things manually, or in a browser, or through the test interface. This is meant to be a convenience wrapper!
 */
function main({day, part}) {
  // Read the input from the directory
  let input;
  const filename = path.resolve(
    path.join(process.cwd(), 'inputs', `day${day}.txt`),
  );
  try {
    input = fs.readFileSync(filename, {encoding: 'utf8'});
  } catch (err) {
    exitWithMessage(
      `\nERROR\nCould not read the input file at ${filename}.\nWe expect input files to be under inputs/dayX.txt.\nPerhaps it was named differently?\n(This is an error from the runner, not in your Elm program)`,
    );
  }

  const flags = {
    part: part,
    day: day,
    input: input,
  };

  const app = Elm.Main.init({flags});

  app.ports.gotResult.subscribe(res =>
    console.log('\nGot solution from Elm:\n', res),
  );
}

const cli = meow(
  `
    Usage
      $ solve <day> <part>
 
    Options
    Examples
      $ solve 1 2
      -- Solves day 1, part 2
`,
  {
    flags: {},
  },
);

function cliEntry(day, part) {
  // Validate arguments
  const parsedDay = parseInt(day);
  const parsedPart = parseInt(part);

  if (isNaN(parsedDay)) {
    exitWithMessage(`Error: Was expecting an integer for day, but got ${day}`);
  }

  if (isNaN(parsedPart)) {
    exitWithMessage(
      `Error: Was expecting an integer for part, but got ${part}`,
    );
  }

  if (parsedDay > 25 || parsedDay < 1) {
    exitWithMessage(
      `Error: Was expecting an integer between 1 and 25 for day, but got ${parsedDay}`,
    );
  }

  if (parsedPart !== 1 && parsedPart !== 2) {
    exitWithMessage(
      `Error: Was expecting either 1 or 2 for part, but got ${parsedPart}`,
    );
  }

  main({day: parsedDay, part: parsedPart});
}

function exitWithMessage(message) {
  console.error(message);
  process.exit(1);
}

cliEntry(cli.input[0], cli.input[1]);
