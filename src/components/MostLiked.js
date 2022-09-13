import React, {useState} from "react";
import Post from "./Post"

function MostLiked({postList, mostPopularPost, setPostList}) {

    const [mostPopular, setMostPopular] = useState(postList)

 console.log(mostPopularPost)

 function handleLoad() {
    setMostPopular(mostPopularPost)
 }

    return(
        <div>
            <div onLoad={handleLoad}>
                {mostPopular.map(post => <Post post={post}/>)}
            </div>
        </div>
    )
}

export default MostLiked;