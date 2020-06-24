import React from 'react'
import AppContext from './AppContext'
import { render } from '@testing-library/react';

class Folder extends React.Component{
    static contextType=AppContext;

    render(){
        const {currentFolder}=this.context;

        if(currentFolder===this.props.id){
                
                return (
                    <div onClick={(e)=>this.props.handleFolderSelect(e)} id={this.props.id} className='highlighted-folder'>
                        {this.props.name}
                    </div>
        )

        }else{
            return (
                    <div className='folder-container'>
                            <div onClick={(e)=>this.props.handleFolderSelect(e)} id={this.props.id} className='folder'>
                                {this.props.name}
                            </div>           
                    </div>
            )
        }
    }
}

export default Folder