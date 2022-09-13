import React, { useState } from "react";
import './Comments.css';

function Comments({ updateComment }) {

    const [comment, setComment] = useState('')

    const formHandler = (e) => {
        e.preventDefault();
        updateComment(comment);
        setComment('');
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <div className="new-comment__controls">
                    <div className="new-comment__control">
                        <input placeholder="Add a new comment" onChange={e => setComment(e.target.value)} value={comment}></input>
                        <button type='submit'>Add Comment</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Comments;