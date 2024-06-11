import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function Post() {
  const [postData, setPostData] = useState(null)
  const postId = useParams().id

  useEffect(() => {
    fetch(`http://localhost:5000/post/${postId}`)
      .then(response => response.json())
      .then(setPostData)
  }, [postId])

  return (
    <>
      {postData && (
        <>
          <img src={postData.url} title={postData.photoTitle} alt={postData.photoTitle} />
          <h2>{postData.title}</h2>
          <p>{postData.author}</p>
          <p>{postData.body}</p>
        </>
      )}
    </>
  )
}

export default Post

