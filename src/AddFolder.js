import React from 'react'
import AppContext from './AppContext'

class AddFolder extends React.Component{
    static contextType=AppContext

    render(){
        const {handleFolderSubmit}=this.context
        return (
            <div>
                <form onSubmit={e=>handleFolderSubmit(e)}>
                    <legend></legend>
                    <fieldset>                    
                        <label htmlFor='folderName'>Folder Name:</label>
                        <input name='folderName' id='folderName'></input>
                        <button type='submit'>submit</button>
                    </fieldset>                    
                </form>
            </div>
        )
    }
}

export default AddFolder