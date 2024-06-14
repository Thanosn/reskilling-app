import PostCard from "../PostCard/PostCard";

import "./RelatedPosts.css"

function RelatedPosts(props) {
  return (
    <>
      <div className="related-font rat-pb-4">Related articles or posts</div>
      <div className="rat-grid rat-grid-cols-3 rat-gap-x-8 rat-gap-y-32">
        {props.posts.map(post => (post && <PostCard key={post.id} post={post} />))}
      </div>
    </>
  )
}

export default RelatedPosts
