import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import PostList from "./PostList";

function MainContent({ postList, handleUpdateLike }) {
    const [searchString, setSearchString] = useState("");

    const filterdList = postList.filter(post => post.caption.toLowerCase().includes(searchString.toLowerCase()) || post.date.includes(searchString));

    return (
        <div>
            <SearchBar search={searchString} onSearchChange={setSearchString} />
            <PostList posts={filterdList} handleUpdateLike={handleUpdateLike} />
        </div>
    )
}

export default MainContent;