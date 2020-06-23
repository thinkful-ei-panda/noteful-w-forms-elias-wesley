import React from 'react'
import { Link } from 'react-router-dom'

const Note = function (props){

    const link=`/notes/${props.note.id}`
    if(props.currentNote===props.note.id){    
        console.log(props.note.content)
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
            <>
                <Link to={link}>
                    <div onClick={(e)=>props.handleNoteSelect(e)} id={props.note.id} className='note'>
                        <div className='note-name'>
                            {props.note.name}
                        </div>
                        {props.note.modified}
                        <button type='button'>Delete</button>
                    </div>
                </Link>
            </>
        )
    }
}

export default Note