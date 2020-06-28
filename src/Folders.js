import React from 'react'
import Folder from './Folder'
import AppContext from './AppContext'
import PropTypes from 'prop-types'

class Folders extends React.Component{  
    static contextType=AppContext;  

    render(){
        const {folders, notes, currentNote,handleAddFolder}=this.context;

        if(currentNote){

            const noteMatch= notes.find(note=>note.id===currentNote)
            const noteBelongsToFolder= folders.find(folder => noteMatch.folderId===folder.id)

            return(
                <div className='folders-container'>
                    
                    <button onClick={() => this.props.handleBackClick()} type='button'>Back</button>
                    {noteBelongsToFolder.name}
                    
                </div>
            )

        }

        const folder= folders.map((folder)=> {
            return <Folder handleFolderSelect={this.props.handleFolderSelect} key={folder.id} id={folder.id} name={folder.name}/>
        })

        return (
            <div className='folders-container'>
                {folder}
                <button onClick={(e)=>handleAddFolder(e)} type='button'>Add Folder</button>
            </div>
        )
    }
}

Folders.propTypes ={
    handleFolderSelect: PropTypes.func,
    handleBackClick: PropTypes.func    
}

Folders.childContextTypes ={
    handleAddFolder: PropTypes.func.isRequired,
    folders: PropTypes.array.isRequired,
    notes: PropTypes.array.isRequired,
    currentNote: PropTypes.string.isRequired
}

export default Folders