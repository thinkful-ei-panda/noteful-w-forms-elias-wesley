import React from 'react'
import Note from './Note'

const Notes = function(props){

    let notes=props.notes
    if(props.currentFolder){
        notes=notes.filter(note => note.folderId===props.currentFolder);
    }

    if(props.currentNote){
        notes=notes.filter(note => note.id===props.currentNote);
    }

    const note= notes.map((note,index) => {
        return <Note currentNote={props.currentNote} handleNoteSelect={(e)=>props.handleNoteSelect(e)} key={index} note={note}/>
    })


    return (
        <div className='notes-container'>
            {note}
            <button type='button'>Add note</button>
        </div>
    )
}

export default Notes