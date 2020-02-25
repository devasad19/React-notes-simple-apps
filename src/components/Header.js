import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <h3 className="navbar-brand">Note App</h3>

         <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
                <NavLink exact to='/' className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/add-note' className="nav-link" >Add Note</NavLink>
            </li>
            
            <li className="nav-item">
                <NavLink to='/about-us' className="nav-link" >About Us</NavLink>
            </li>
         </ul>

        </nav>
    )
}

export default Header;