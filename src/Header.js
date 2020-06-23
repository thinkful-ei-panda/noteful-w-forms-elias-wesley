import React from 'react'
import { Link } from 'react-router-dom'

const Header = function (props){
    return (
        <>
            <Link to='/'>
                <header onClick={()=>props.handleClickHeader()}>
                    <h1>Noteful</h1>
                </header>
            </Link>
        </>
    )
}

export default Header