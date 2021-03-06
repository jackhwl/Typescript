const fs = require('fs');
const chalk = require('chalk')

const listNotes = () => {
    console.log(chalk.inverse('Your notes:'))
    const notes = loadNotes()
    notes.forEach( note => console.log(chalk.green(note.title)))
}

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    debugger
    
    if (!duplicateNote) {
        notes.push({title, body})
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()    
    const filterNotes = notes.filter(note => note.title !== title)

    if (notes.length > filterNotes.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(filterNotes)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)

    if (note) {
        console.log('title: ', note.title, 'body: ', note.body)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (err) {
        return []
    }
}

module.exports = {
    readNote, addNotes, removeNote, listNotes, loadNotes
}