import React from 'react'
import {Link} from 'react-router-dom'

const Folder = function(props){
    const link=`/folders/${props.id}`;
    if(props.currentFolder===props.id){
        return (
            <div onClick={(e)=>props.handleFolderSelect(e)} id={props.id} className='highlighted-folder'>
                {props.name}
            </div>
    )

    }else{
        return (
                <div className='folder-container'>
                    <Link to={link}>
                        <div onClick={(e)=>props.handleFolderSelect(e)} id={props.id} className='folder'>
                            {props.name}
                        </div>
                    </Link>            
                </div>
        )
    }
}

export default Folder