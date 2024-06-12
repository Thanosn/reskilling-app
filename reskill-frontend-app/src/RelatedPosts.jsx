import PostCard from "./PostCard";

function RelatedPosts(props) {
  return (
    <>
      <div className="related-font">Related articles or posts</div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-32">
        {props.posts.map(post => (post && <PostCard key={post.id} post={post} />))}
      </div>
    </>
  )
}

export default RelatedPosts
