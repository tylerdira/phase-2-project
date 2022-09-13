import React from "react";
import './DisplayComments.css';

function DisplayComments({ comment }) {
    return (
        <div className="comment">
            <p>{comment}</p>
        </div>
    )
}

export default DisplayComments;