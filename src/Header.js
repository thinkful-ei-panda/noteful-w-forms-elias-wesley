import React from 'react'

const Header = function (props){
    return (
        <header onClick={()=>props.handleClickHeader()}>
            <h1>Noteful</h1>
        </header>
    )
}

export default Header