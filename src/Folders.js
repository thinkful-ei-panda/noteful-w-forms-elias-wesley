import React from 'react'
import Folder from './Folder'
import AppContext from './AppContext'

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

export default Folders