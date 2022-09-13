import React, {useState, useEffect} from "react";

function Comments({comments}) {

    const [backendComments, setBackendComments] = useState([])

    useEffect(() => {

    }, [])

    return (
        <div>{comments}</div>
    )
}

export default Comments;