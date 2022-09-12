import React, {useState} from "react";

function AddPostForm({newPost}) {

    const [image, setImage] = useState('')
    const [caption, setCaption] = useState('')

    
    return(

        <div>
            <form onSubmit={e => {
                e.preventDefault();
                fetch('http://localhost:3000/posts', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        image, caption,
                    }),
                })
                .then(r => r.json())
                .then(aNewPost => {
                    newPost(aNewPost);
                    setImage('');
                    setCaption('');
                })
            }}>
                <input placeholder="Image URL" onChange={e => setImage(e.target.value)} value={image}></input>
                <br/>
                <input placeholder="Caption" onChange={e => setCaption(e.target.value)} value={caption}></input>
                <br/>
                <input type='submit' value="Post"></input>
            </form>
        </div>
    )
}

export default AddPostForm;