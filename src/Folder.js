import React from 'react'

const Folder = function(props){
    if(props.currentFolder===props.id){
        return (
            <div onClick={(e)=>props.handleFolderSelect(e)} id={props.id} className='highlighted-folder'>
                {props.name}
            </div>
    )

    }else{
        return (
                <div className='folder-container'>
                        <div onClick={(e)=>props.handleFolderSelect(e)} id={props.id} className='folder'>
                            {props.name}
                        </div>           
                </div>
        )
    }
}

export default Folder