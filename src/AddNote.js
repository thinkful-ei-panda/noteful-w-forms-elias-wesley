import React from 'react'
import AppContext from './AppContext'

class AddNote extends React.Component {

    static contextType=AppContext;

    render () {
        const {handleAddNoteSubmit, handleUpdateNoteFields, noteNameValue} = this.context;
        let validation;
        
        if (noteNameValue.length === 0) {
            validation = 'Name is required';
        }
        
        return (
            <div>
                <form onSubmit={e=>handleAddNoteSubmit(e)}>
                    <legend></legend>
                    <fieldset>
                        <input id='name' onChange={e=>handleUpdateNoteFields(e)}></input>
                        <label>This is for the name</label>
                        <input id='content' ></input>
                        <label>This is for the content</label>
                        <input id='folderName' ></input>
                        <label>This is for the folder</label>
                        <button type='submit'>Save</button>
                    </fieldset>
                </form>

                <div>
                  {validation}  
                </div>
            </div>
        )
    }
}

export default AddNote