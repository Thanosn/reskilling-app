import PostCard from "./PostCard";

function RelatedPosts(props) {
  return (
    props.posts.map(post => <PostCard key={post.id} post={post} />)
  )
}

export default RelatedPosts
