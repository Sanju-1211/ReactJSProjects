import React from "react";
import notes from "../notes"

function NoteCard(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

function createCard(note){
  return <NoteCard title={note.title} content={note.content}/>;
}

const Note = notes.map(createCard)

export default Note;