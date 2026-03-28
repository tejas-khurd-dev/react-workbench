import { X } from "lucide-react";

const NoteCard = ({ title, note, index, deleteNote }) => {
  return (
    <div className="note-card">

      <div className="note-card-header">
        <h2 className="note-card-title">{title}</h2>


        <X
          size={22}
          className="note-card-delete"
          onClick={() => deleteNote(index)}
        />

        
      </div>

      <p className="note-card-body">{note}</p>

    </div>
  );
};

export default NoteCard;