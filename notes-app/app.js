const validator = require('validator')
const fn = require('./notes')

console.log(fn())
console.log(validator.isEmail('huang@wenlin.net'))