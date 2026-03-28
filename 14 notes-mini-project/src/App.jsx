import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import "./index.css";

const App = () => {

  const [title, settitle] = useState("");
  const [note, setnote] = useState("");
  const [notes, setnotes] = useState([]);

  function submitHandler(e) {
    e.preventDefault();

    const newNote = {
      title: title,
      note: note
    };

    setnotes([...notes, newNote]);
    settitle("");
    setnote("");
  }

  function deleteNote(index) {
    setnotes(prevNotes => {
      const updatedNotes = [...prevNotes];
      updatedNotes.splice(index, 1);
      return updatedNotes;
    });
  }

  return (
    <div className="main-wrapper">

      <NoteForm
        title={title}
        note={note}
        settitle={settitle}
        setnote={setnote}
        submitHandler={submitHandler}
      />

      <NotesList
        notes={notes}
        deleteNote={deleteNote}
      />

    </div>
  );
};

export default App;