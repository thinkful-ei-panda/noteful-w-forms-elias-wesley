import React from 'react'
import AppContext from './AppContext'
import { render } from '@testing-library/react'

class Note extends React.Component{
    static contextType=AppContext;


    render(){
        const {currentNote}=this.context

        if(currentNote===this.props.note.id){    
            return(
                <>
                    <div onClick={(e)=>this.props.handleNoteSelect(e)} id={this.props.note.id} className='note'>
                        <div className='note-name'>
                            {this.props.note.name}
                        </div>
                        {this.props.note.modified}
                        <button type='button'>Delete</button>
                    </div>      
                    <div className='note-content'>
                        {this.props.note.content}
                    </div>
                </>
            )
        }else{
            return (
                <div onClick={(e)=>this.props.handleNoteSelect(e)} id={this.props.note.id} className='note'>
                    <div className='note-name'>
                        {this.props.note.name}
                    </div>
                    {this.props.note.modified}
                    <button type='button'>Delete</button>
                </div>
            )
        }
    }
}
export default Note