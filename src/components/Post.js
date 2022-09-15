import React, { useState } from "react";
import './Post.css';
import Comments from "./Comments";
import DisplayComments from "./DisplayComments";

function Posts({ post, handleUpdateLike, handleNewComment }) {

    const [toggle, setToggle] = useState(false);
    const { id, image, likes, caption, date, comments } = post



    function increaseLikes() {
        const updatedLikeObj = {
            likes: post.likes + 1,
        };
        fetch(`http://localhost:3005/posts/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedLikeObj),
        })
            .then(r => r.json())
            .then(handleUpdateLike)
    }

    function updateComment(comment) {
        const updatedCommentsObj = {
            comments: [...comments, comment],
        };
        fetch(`http://localhost:3005/posts/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCommentsObj),
        })
            .then(r => r.json())
            .then(handleNewComment)
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const toBeDisplayedComments = comments.map(comment => <DisplayComments key={Math.random()} comment={comment} />)

    return (
        <div className="post">

            <img src={image}></img>
            <br />
            <p>Likes: {likes}</p>
            <button onClick={increaseLikes}> ♡ </button>
            <p>{caption}</p>
            <p>Posted: {date}</p>
            <div>
                {
                    toggle ?
                        <div>
                            <p>Comments: <button onClick={handleToggle}>Minimize</button></p>
                            {toBeDisplayedComments}
                            <Comments updateComment={updateComment} />
                        </div>
                        :
                        <div>
                            <p>Comments: <button onClick={handleToggle}>View</button></p>
                        </div>
                }
            </div>
        </div>
    )
}

export default Posts;