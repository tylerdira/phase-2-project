import React from "react";
import Posts from "./Posts";
import SearchBar from "./SearchBar";

function MainContent({postList, handleUpdateLike}) {
    return(
        <div>
            <SearchBar />
            {postList.map(post => <Posts key={post.id} post={post} handleUpdateLike={handleUpdateLike} />)}
        </div>
    )
}

export default MainContent;