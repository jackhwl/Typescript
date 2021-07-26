const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const fn = require('./notes')

yargs.command({
    command: 'add',
    describe: 'Add a note',
    handler: function() {
        console.log('Add a note')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log('List all notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Read a note')
    }
})

console.log(fn())
console.log(validator.isEmail('huang@wenlin.net'))
console.log(chalk.green.bold.inverse('Success'))

console.log(process.argv)
console.log(yargs.argv)

