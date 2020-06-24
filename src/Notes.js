import React from 'react'
import Note from './Note'
import AppContext from './AppContext';

class Notes extends React.Component{
    static contextType=AppContext;

    render(){
        const {notes,currentFolder,currentNote} = this.context;

        let renderNotes=notes;

        if(currentFolder){
            renderNotes=renderNotes.filter(note => note.folderId===currentFolder);
        }

        if(currentNote){
            renderNotes=renderNotes.filter(note => note.id===currentNote);
        }

        const note= renderNotes.map((note) => {
            return <Note currentNote={currentNote} handleNoteSelect={this.props.handleNoteSelect} key={note.id} note={note}/>
        })


        return (
            <div className='notes-container'>
                {note}
                <button type='button'>Add note</button>
            </div>
        )
    }
}

export default Notes