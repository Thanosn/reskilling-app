import { useState, useEffect } from 'react'
import RelatedPosts from './RelatedPosts/RelatedPosts';
import PageTitle from '../PageTitle/PageTitle';

const URL = "http://localhost"
const PORT = 5000

function PostsHomepage() {
  const [homepagePosts, setHomepagePosts] = useState(null)
  const [relatedPostsFromBackend, setRelatedPostsFromBackend] = useState(null)

  useEffect(() => {
    fetch(`${URL}:${PORT}/posts`)
      .then(response => response.json())
      .then(data => {
        setHomepagePosts(data.slice(0, 3))
        setRelatedPostsFromBackend(data.slice(3))
      })
  }, [])

  return (
    <>
      <PageTitle title="Posts List" subtitle="Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading" />

      {homepagePosts && <img className='rat-size-full rat-rounded-xl' src={homepagePosts[0].url} title={homepagePosts[0].photoTitle} alt={homepagePosts[0].photoTitle} width='1' height='1' />}
      <div className='rat-mx-96 rat-my-16'>
        <p className='text-font rat-mb-8'>
          Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:
        </p>
        <p className='text-font rat-mb-8'>Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content.
          Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure.
          Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning.
          Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
        </p>
        <p className='text-font rat-mb-8'>Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful.
          Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
        </p>
      </div>
      <div className='rat-flex'>
        {homepagePosts && <img className='rat-rounded-xl rat-mr-8 rat-size-6/12' src={homepagePosts[1].url} title={homepagePosts[1].photoTitle} alt={homepagePosts[1].photoTitle} width='1' height='1' />}
        {homepagePosts && <img className='rat-rounded-xl rat-ml-8 rat-size-6/12' src={homepagePosts[2].url} title={homepagePosts[2].photoTitle} alt={homepagePosts[2].photoTitle} width='1' height='1' />}
      </div>
      <div className='rat-mx-96 rat-my-16'>
        <p className='text-font rat-mb-8'>Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate.
          Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure.
          Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.</p>
        <p className='text-font rat-mb-8'>Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful.
          Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.
        </p>
      </div>

      {relatedPostsFromBackend && <RelatedPosts posts={relatedPostsFromBackend} />}
    </>
  )
}

export default PostsHomepage
