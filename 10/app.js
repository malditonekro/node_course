console.log('Starting app.js');

const fs = require('fs');
const os = require ('os');
const notes = require('./notes.js');

// Write a file with FileSystem and OS
    // var user = os.userInfo();
    // fs.appendFile('greetings.txt',`\nHello ${user.username}! You are ${notes.age}`);

// Module's export object, created function example
    // var res = notes.addNote();

// Print a function export with params
    console.log('Result:',notes.add(9,-2));