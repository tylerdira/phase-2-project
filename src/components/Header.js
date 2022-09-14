import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

function Header({setUser}) {
    return(
        <div>
            <NavBar setUser={setUser} />
        </div>
    )
}

export default Header;