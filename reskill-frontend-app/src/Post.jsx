import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import PageTitle from './PageTitle';

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
          <div className='flex'>
            <div className='mr-64'><PageTitle title={postData.title} subtitle={"Written by: " + postData.author} />
              <p className='text-font mb-12'>{postData.body}</p>

              <p className='text-font mb-12'>
                Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content.
                Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure.
                Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning.
                Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound.
                Zürich sleepy perfect consectetur.
              </p>
            </div>
            <img className='rounded-xl' src={postData.url} title={postData.photoTitle} alt={postData.photoTitle} />
          </div>
        </>
      )}
    </>
  )
}

export default Post

