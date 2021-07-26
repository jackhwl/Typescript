const validator = require('validator')
const chalk = require('chalk')
const fn = require('./notes')

console.log(fn())
console.log(validator.isEmail('huang@wenlin.net'))
console.log(chalk.green.bold.inverse('Success'))

console.log(process.argv)