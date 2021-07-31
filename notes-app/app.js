const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }        
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        console.log('List all notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Read a note')
    }
})

//console.log(fn())
//console.log(validator.isEmail('huang@wenlin.net'))
//console.log(chalk.green.bold.inverse('Success'))

yargs.parse()
//console.log(process.argv)
//console.log(yargs.argv)

