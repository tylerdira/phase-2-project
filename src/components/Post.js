import React from "react";
import './Post.css';
import Comments from "./Comments";

function Posts({ post, handleUpdateLike, handleNewComment }) {

    const { id, image, likes, caption, date, comments } = post



    function increaseLikes() {
        const updatedLikeObj = {
            likes: post.likes + 1,
        };
        fetch(`http://localhost:3000/posts/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedLikeObj),
        })
            .then(r => r.json())
            .then(handleUpdateLike)
    }

    

    return (
        <div className="post">

            <img src={image}></img>
            <br />
            <p>Likes: {likes}</p>
            <button onClick={increaseLikes}> ♡ </button>
            <p>{caption}</p>
            <p>Posted: {date}</p>
            <p>Comments: </p>
            <form>
                <input placeholder="Add a new comment"></input>
                <input type='submit' value='Add Comment'></input>
            </form>
        </div>
    )
}

export default Posts;