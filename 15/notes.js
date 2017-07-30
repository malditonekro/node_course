console.log('Starting note.js');

//Imports
const fs = require('fs');

var fetchNotes = () => {
    try{
        let rs = fs.readFileSync('notes-data.json');
        return JSON.parse(rs);
    }catch(e){
        //console.log("We couldn't read the file");
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNote = (title,body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };    

    let duplicateNotes = notes.filter((note) => note.title === title);
        
    if(duplicateNotes.length===0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }else{
        console.log('Title already exists.');
    }
}

let getAll = () => {

}

let getNote = () => {

}
module.exports = {
    addNote,
    getAll,
    getNote/*,
    removeNote*/
};