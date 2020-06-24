import React from 'react'
import Folder from './Folder'

const Folders = function(props){    
    if(props.currentNote){

        const noteMatch= props.notes.find(note=>note.id===props.currentNote)
        const noteBelongsToFolder= props.folders.find(folder => noteMatch.folderId===folder.id)

        return(
            <div className='folders-container'>
                
                <button onClick={() => props.handleBackClick()} type='button'>Back</button>
                {noteBelongsToFolder.name}
                
            </div>
        )

    }

    const folder= props.folders.map((folder)=> {
        return <Folder handleFolderSelect={props.handleFolderSelect} currentFolder={props.currentFolder} key={folder.id} id={folder.id} name={folder.name}/>
    })

    return (
        <div className='folders-container'>
            {folder}
            <button type='button'>Add Folder</button>
        </div>
    )
}

export default Folders