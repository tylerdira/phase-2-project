import React from "react";
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div className="nav-bar">
            <Link to='/'>Home</Link>
            <Link to="/AddPostForm">New Post</Link>
        </div>
    )
}

export default NavBar;