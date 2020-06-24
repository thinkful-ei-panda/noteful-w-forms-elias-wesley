import React from 'react'
import AppContext from './AppContext'

class Header extends React.Component{
    static contextType=AppContext
    render(){
        const {handleClickHeader} = this.context
        return (
            <header onClick={()=>handleClickHeader()}>
                <h1>Noteful</h1>
            </header>
        )
    }
}

export default Header