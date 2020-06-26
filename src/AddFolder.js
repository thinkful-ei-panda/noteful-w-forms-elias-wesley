import React from 'react'
import AppContext from './AppContext'
import PropTypes from 'prop-types'

class AddFolder extends React.Component{
    static contextType=AppContext

    
    render(){
        const {handleFolderSubmit, handleFolderFormOnChange, folderField }=this.context

        let validation = '';

        if (folderField.value.length === 0 && folderField.touched===true) {
            validation = 'Name is required';
        }
        console.log(validation, folderField)

        let disabled=false
        if (validation.length !== 0 || folderField.touched===false) {
            disabled = true;
        }

        return (
            <div>
                <form onSubmit={e=>handleFolderSubmit(e)}>
                    <legend></legend>
                    <fieldset>                    
                        <label htmlFor='folderName'>Folder name:  </label>
                        <input name='folderName' id='folderName' onChange={e => handleFolderFormOnChange(e)}></input>
                        <button type='submit' disabled={disabled}>submit</button>
                    </fieldset>                    
                </form>
                <div>
                    {validation}
                </div>
            </div>
        )
    }
}

AddFolder.childContextType = {
    handleFolderSubmit: PropTypes.func.isRequired, 
    handleFolderFormOnChange: PropTypes.func.isRequired, 
    folderField: PropTypes.object.isRequired

}

export default AddFolder