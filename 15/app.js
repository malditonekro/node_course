console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;//enhanced cmd parameters 
var cmd = process.argv[2];
// console.log('Yargs',argv);
switch(cmd){
    case 'add':
        let note = notes.addNote(argv.noteTitle,argv.noteBody);
        if(note){
            console.log('Note created');
            console.log('--');
            console.log(`Title: ${note.title}`);
            console.log(`Body: ${note.body}`);
        }else{
            console.log("We coulnd't create the note");
        }
        break;
    case 'list':
        notes.list();
        break;    
    case 'read':
        notes.getNote(argv.noteTitle);
        break;
    case 'remove':
        notes.removeNote(argv.noteTitle);
        break;
}