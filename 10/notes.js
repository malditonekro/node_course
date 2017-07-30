console.log('Starting note.js');

//Module's Exports object allows us to share data through Module.
module.exports.age = 23;

module.exports.addNote = () => {
    console.log('addNote');
    return 'newNote';
}

module.exports.add = (a,b) => {
    return a + b;
};