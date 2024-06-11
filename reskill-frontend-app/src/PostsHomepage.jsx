import { useState, useEffect } from 'react'
import RelatedPosts from './RelatedPosts';

function PostsHomepage() {
  const [homepagePosts, setHomepagePosts] = useState(null)
  const [relatedPostsFromBackend, setRelatedPostsFromBackend] = useState(null)

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then(response => response.json())
      .then(data => {
        setHomepagePosts(data.slice(0,3))
        setRelatedPostsFromBackend(data.slice(3))
      })
  }, [])

  return (
    <>
      <h1> Posts List </h1>
      <h2>Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading</h2>

      {homepagePosts && <img src={homepagePosts[0].url} title={homepagePosts[0].photoTitle} alt={homepagePosts[0].photoTitle}/>}

      <p>Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:
        Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
        Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.</p>
      
      {homepagePosts && <img src={homepagePosts[1].url} title={homepagePosts[1].photoTitle} alt={homepagePosts[1].photoTitle}/>}
      {homepagePosts && <img src={homepagePosts[2].url} title={homepagePosts[2].photoTitle} alt={homepagePosts[2].photoTitle}/>}

      <p>Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.
        Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.</p>

      <h3>Related articles or posts</h3>

      {relatedPostsFromBackend && <RelatedPosts posts={relatedPostsFromBackend} />}
    </>
  )
}

export default PostsHomepage
