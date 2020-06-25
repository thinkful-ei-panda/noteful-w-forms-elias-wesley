import React from 'react'
import AppContext from './AppContext'

class AddNote extends React.Component {

    static contextType=AppContext;

    render () {
        const {handleAddNoteSubmit, handleUpdateNoteFields, noteFields,folders} = this.context;
        let validation=[];
        
        
        if (noteFields.name.value.length === 0 && noteFields.name.touched===true) {
            validation.push('Name is required');
        }

        // console.log(folders.find(folder => folder.name===noteFields.folderName.value));

        if(noteFields.folderName.touched===true && folders.find(folder => folder.name===noteFields.folderName.value)===undefined){
            validation.push('Choose an already existing folder (casing matters)');
        }

        validation= validation.map((requirement,index)=>{
            return(
                <li key='index'>
                    {requirement}
                </li>
            )
        })

        let options=folders.map((folder,i) => {
            return (
                <option key={i} value={folder.name}>{folder.name}</option>
            )
        })

        let disabled = false;
        if (validation.length !== 0 || noteFields.name.touched === false) {
            disabled = true
        }
        
        return (
            <div>
                <form onSubmit={e=>handleAddNoteSubmit(e)}>
                    <legend></legend>
                    <fieldset>
                        <div>
                            <label htmlFor='name'>Note name:  </label>
                            <input name='name' id='name' onChange={e=>handleUpdateNoteFields(e)}></input>
                        </div>
                        <div>
                            <label>Write your note here:  </label>
                            <input id='content' onChange={e=>handleUpdateNoteFields(e)}></input>
                        </div>
                        <div>
                            <label>Choose a folder:  </label>
                            <select id='folderName' onChange={e=>handleUpdateNoteFields(e)}>
                                {options}
                            </select>
                        </div>
                        <button type='submit' disabled = {disabled}>Save</button>
                    </fieldset>
                </form>

                <ul>
                  {validation} 
                </ul>
            </div>
        )
    }
}

export default AddNote