import express from 'express';
import { addNote, editNote, removeNote } from '../presistence.js'
import { v4 } from "uuid";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json())
const newId = v4();

router.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.body);
  const newNote = {
    id: newId,
    text: req.body.noteText
  }
  addNote(newNote);
  res.redirect('/');
});

router.put('/:id', (req, res) => {
  editNote(req.params.id, req.body);
})

router.delete('/:id', (req, res)=> {
  removeNote(req.params.id);
  res.status(200).send();
});

export default router;