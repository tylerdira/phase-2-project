import React, { useState } from "react";
import './AddPostForm.css';

function AddPostForm({ newPost }) {

    const [image, setImage] = useState('')
    const [caption, setCaption] = useState('')


    const formHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:3005/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                image, caption, date: new Date().toLocaleDateString()
            }),
        })
            .then(r => r.json())
            .then(aNewPost => {
                newPost(aNewPost);
                setImage('');
                setCaption('');
            })
    }
    return (

        <div>
            <p className="new-post-title">New Post Form</p>
            <form className="new-post-div" onSubmit={formHandler}>
                <div className="new-post__controls">
                    <div className="new-post__control">
                        <label>Image URL</label>
                        <input placeholder="Image URL" onChange={e => setImage(e.target.value)} value={image}></input>
                    </div>
                    <div className="new-post__control">
                        <label>Caption</label>
                        <input placeholder="Caption" onChange={e => setCaption(e.target.value)} value={caption}></input>
                    </div>
                </div>

                <div className='new-post__actions'>
                    <button className='glow-on-hover' type='submit'>Submit Post</button>
                </div>
            </form>
        </div>
    )
}

export default AddPostForm;