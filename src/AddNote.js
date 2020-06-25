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

        let options=folders.map(folder => {
            return (
                <option value={folder.name}>{folder.name}</option>
            )
        })
        
        return (
            <div>
                <form onSubmit={e=>handleAddNoteSubmit(e)}>
                    <legend></legend>
                    <fieldset>
                        <input name='name' id='name' onChange={e=>handleUpdateNoteFields(e)}></input>
                        <label htmlFor='name'> This is for the name</label>
                        <input id='content' onChange={e=>handleUpdateNoteFields(e)}></input>
                        <label>This is for the content</label>
                        {/* <input id='folderName' onChange={e=>handleUpdateNoteFields(e)}></input> */}
                        <select id='folderName' onChange={e=>handleUpdateNoteFields(e)}>
                            {options}
                        </select>
                        <label>This is for the folder</label>
                        <button type='submit'>Save</button>
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