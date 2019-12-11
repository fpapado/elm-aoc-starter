const path = require('path');
const fs = require('fs');

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
    console.error(
      `ERROR\nCould not read the input file at ${filename}.\nWe expect input files to be under inputs/dayX.txt.\nPerhaps it was named differently?\n(This is an error from the runner, not in your Elm program)`,
    );
    process.exit(1);
  }

  const obj = {
    part: 1,
    day: 1,
    input: 'hi',
  };

  const app = Elm.Main.init({flags: obj});

  app.ports.gotResult.subscribe(res => console.log('Got result: ', res));
}

main({day: 1, part: 1});
