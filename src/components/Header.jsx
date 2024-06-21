import React from 'react'
import { Link } from 'react-router-dom'

 export default function Header(){
    return(
        <header>
            <Link className='title' to='/'>YuHui</Link>
        </header>
    )
 }