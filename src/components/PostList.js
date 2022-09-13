import React from "react";
import Posts from "./Post";
import './PostList.css';

function PostList({ posts, handleUpdateLike }) {
    const postComponents = posts.map(post => <Posts key={post.id} post={post} handleUpdateLike={handleUpdateLike} />);

    return (
        <div className="posts">
            {postComponents}
        </div>
    )
}

export default PostList;