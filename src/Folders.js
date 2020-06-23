import React from 'react'
import Folder from './Folder'

const Folders = function(props){    
    if(props.currentNote){

        const noteMatch= props.notes.find(note=>note.id===props.currentNote)
        const noteBelongsToFolder= props.folders.find(folder => noteMatch.folderId===folder.id)

        return(
            <div className='folders-container'>
                
                <button onClick={() => props.history.goBack()} type='button'>Back</button>
                {noteBelongsToFolder.name}
                
            </div>
        )

    }


    const folder= props.folders.map((folder, index)=> {
        return <Folder handleFolderSelect={(e)=>props.handleFolderSelect(e)} currentFolder={props.currentFolder} key={index} id={folder.id} name={folder.name}/>
    })

    return (
        <div className='folders-container'>
            {folder}
            <button type='button'>Add Folder</button>
        </div>
    )
}

export default Folders