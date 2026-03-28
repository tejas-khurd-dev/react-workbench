const NoteForm = ({ title, note, settitle, setnote, submitHandler }) => {
  return (
    <div className="left-panel">
      <div className="left-panel-inner">

        <div className="form-box">
          <form onSubmit={submitHandler} className="form-inner">

            <input
              type="text"
              placeholder="Heading"
              className="title-input"
              value={title}
              maxLength={50}
              onChange={(e) => settitle(e.target.value)}
            />

            <textarea
              placeholder="Write note"
              className="note-textarea"
              value={note}
              onChange={(e) => setnote(e.target.value)}
            ></textarea>

            <button type="submit" className="add-btn">
              Add Note
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default NoteForm;