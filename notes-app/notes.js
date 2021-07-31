const fs = require('fs');
const chalk = require('chalk')

const getNotes = function() {
    return loadNotes()
}
const listNotes = () => {
    console.log(chalk.inverse('Your notes:'))
    const notes = loadNotes()
    notes.forEach( note => console.log(chalk.green(note.title)))
}

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
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
    getNotes, addNotes, removeNote, listNotes, loadNotes
}