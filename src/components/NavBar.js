import React from "react";
import {NavLink, Link} from 'react-router-dom';

function NavBar() {
    return(
        <div>
            <Link to='/MainContent'>Home</Link>
            <Link to="/AddPostForm">New Post</Link>
        </div>
    )
}

export default NavBar;