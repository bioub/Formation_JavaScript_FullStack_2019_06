// (function (exports, require, module, __filename, __dirname) {
const assert = require('assert');
const chalk = require('chalk');
const myMaths = require('./my-maths');

try {
  assert.strictEqual(myMaths.sum(1, 2), 3);
  console.log(chalk.green('Tests my-maths OK'));
} catch (error) {
  console.log(chalk.red('Tests my-maths FAIL'));
}
// });
