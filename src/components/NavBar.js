import React from "react";
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div className="nav-bar">
            <Link to='/' className="home-link">Home</Link>
            <Link to="/AddPostForm" className="new-post-link">New Post</Link>
            <Link to='/MostLiked' className="most-liked-link">Top 5 Liked Posts</Link>
        </div>
    )
}

export default NavBar;