import { useState, useEffect } from "react";
import Note from "./components/Note";
import NoteForm from "./components/NoteForm";

export default function App() {
  const [notes, setNotes] = useState([]);

  // Load notes from local storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to local storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => setNotes([...notes, newNote]);

  const deleteNote = (id) => setNotes(notes.filter((note) => note.id !== id));

  const updateNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-center">Google Keep Clone</h1>
        <NoteForm addNote={addNote} />
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {notes.map((note) => (
            <Note key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote} />
          ))}
        </div>
      </div>
    </div>
  );
}
