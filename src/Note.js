import React from 'react'

const Note = function (props){
    if(props.currentNote===props.note.id){    
        return(
            <>
                <div onClick={(e)=>props.handleNoteSelect(e)} id={props.note.id} className='note'>
                    <div className='note-name'>
                        {props.note.name}
                    </div>
                    {props.note.modified}
                    <button type='button'>Delete</button>
                </div>      
                <div className='note-content'>
                    {props.note.content}
                </div>
            </>
        )
    }else{
        return (
            <div onClick={(e)=>props.handleNoteSelect(e)} id={props.note.id} className='note'>
                <div className='note-name'>
                    {props.note.name}
                </div>
                {props.note.modified}
                <button type='button'>Delete</button>
            </div>
        )
    }
}
export default Note