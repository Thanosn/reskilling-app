import PostCard from "./PostCard";

function RelatedPosts(props) {
  return (
    <>
      <div className="related-font">Related articles or posts</div>
      <div className="rat-grid rat-grid-cols-3 rat-gap-x-8 rat-gap-y-32">
        {props.posts.map(post => (post && <PostCard key={post.id} post={post} />))}
      </div>
    </>
  )
}

export default RelatedPosts
