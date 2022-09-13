import React from "react";
import Posts from "./Post";
import './PostList.css';

function PostList({ posts, handleUpdateLike, handleNewComment }) {
    const postComponents = posts.map(post => <Posts key={post.id} post={post} handleNewComment={handleNewComment} handleUpdateLike={handleUpdateLike} />);

    return (
        <div className="posts">
            {postComponents}
        </div>
    )
}

export default PostList;