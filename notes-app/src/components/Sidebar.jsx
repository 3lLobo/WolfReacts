import React, { useState } from "react"
import { TextField } from "@mui/material"

export default function Sidebar(props) {


    function updateTitle(event) {
        console.log(event.target.value);
        props.setNotes((oldNotes) =>
            oldNotes.map((oldNote) => {
                return oldNote.id === props.currentNote.id
                    ? { ...oldNote, title: event.target.value }
                    : oldNote;
            })
        );
    }

    function handleChange(event) {
        props.updateTitle(props.currentNote.id, event.value)
    }

    const noteElements = props.notes.map((note, index) => {
        return (
            <div key={note.id}>
                <div

                    className={`title ${note.id === props.currentNote.id ? "selected-note" : ""}`}
                    onClick={() => props.setCurrentNoteId(note.id)}
                >
                    {note.id === props.currentNote.id
                        ? <TextField placeholder={note.title}
                            onChange={updateTitle} />
                        : <h4 className="text-snippet" >{note.title}</h4>}
                </div>
            </div>
        )})

return (
    <section className="pane sidebar">
        <div className="sidebar--header">
            <h3>Notes</h3>
            <button className="new-note" onClick={props.newNote}>+</button>
        </div>
        {noteElements}
    </section>
)
}
