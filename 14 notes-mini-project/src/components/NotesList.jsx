import NoteCard from "./NoteCard";

const NotesList = ({ notes, deleteNote }) => {
  return (
    <div className="right-panel">
      <h1 className="right-panel-title">Your Notes</h1>

      <div className="note-container">
        {notes.map((n, index) => (
          <NoteCard
            key={index}
            index={index}
            title={n.title}
            note={n.note}
            deleteNote={deleteNote}
          />
        ))}
      </div>

    </div>
  );
};

export default NotesList;