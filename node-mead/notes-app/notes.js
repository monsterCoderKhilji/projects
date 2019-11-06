const fs = require('fs');
const chalk = require('chalk');

const readNote = (title) => {

    const notes = loadNotes().find(x => x.title === title);

    if (!notes) {
        console.log(chalk.red.inverse('Title ' + title + ' not found'));
    } else {
        console.log(chalk.green.inverse(title));
        console.log(notes.body);

    }


}

const listNotes = () => {
    const notesarr = loadNotes();

    if (notesarr.length == 0) {
        console.log(chalk.red.inverse('No notes found'));
    } else {
        console.log(chalk.green.inverse('Listing out all notes'));
        notesarr.forEach(element => {
            console.log(element.title + ' -> ' + element.body);
        });
    }

}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(element => element.title === title);

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = (title) => {
    const notesarr = loadNotes();
    const newarray = notesarr.filter(x => x.title !== title);

    if (newarray.length === notesarr.length) {
        console.log(chalk.red.inverse('Note not found'));
    } else {
        console.log(chalk.green.inverse('Note removed'));
        fs.writeFileSync('notes.json', JSON.stringify(newarray));
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}