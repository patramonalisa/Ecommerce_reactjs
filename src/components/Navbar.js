import React, { useState } from 'react'
import logo from '../asstes/pizzaLogo.png'
import {Link} from 'react-router-dom'

import { Reorder } from '@material-ui/icons';

import "../styles/Navbar.css"


function Navbar(){
    const[openLinks,setOpenLinks]=useState(false);
    const toggleNavbar=()=>{
        setOpenLinks(!openLinks);
    }
    return(
        <div className='navbar'>
            <div className='leftside' id={openLinks?"open":"close"}>
                <img src={logo} alt="" />
                <div className='hiddenLinks'>
                <Link to='/'>Home</Link> 
               <Link to='/menu'>Menu</Link>
               <Link to='/about'>About</Link>
               <Link to='/contact'>Contact</Link>
                </div>
            </div>
            <div classname='rightside'>
               <Link to='/'>Home</Link> 
               <Link to='/menu'>Menu</Link>
               <Link to='/about'>About</Link>
               <Link to='/contact'>Contact</Link>
               <button onClick={toggleNavbar}>
                
                    <Reorder />
               </button>
            </div>
        </div>
    )
}
export default Navbar