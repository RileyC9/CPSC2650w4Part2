// const { MongoClient } = require('mongodb');
let _notes = [
  { id: "2", text: "CPSC 2650" },
  { id: "1", text: "An awesome web dev Note" },
];

// TODO: implement addNote and removeNote

// class DataAccessLayer {
//   constructor () {
//     this.client = new MongoClient(process.env.MONGO_URL, { useUnifiedTopology: true });
//     this.db = null;
//   }
// }
const addNote = (note) => {
  _notes.push({id:note.id, text:note.text})
}

const editNote = (noteId, updates) => {
  _notes.forEach(note => {
    if (note.id == noteId) {
      note.text = updates.text
    }
  });
}

const removeNote = (noteId) => {
  _notes = _notes.filter((note) => note.id !== noteId);
}
// For fun: why do we export a function instead of notes directly?
const notes = () => _notes;

export { notes, addNote, editNote, removeNote };