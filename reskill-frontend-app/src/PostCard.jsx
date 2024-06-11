import { useNavigate } from "react-router-dom";

function PostCard(props) {
  const navigate = useNavigate();
  const post = props.post;

  return (
    <>
      <button onClick={() => navigate(`/post/${post.id}`)}>
        <img src={post.thumbnailUrl} title={post.photoTitle} alt={post.photoTitle}></img>
        <h2>{post.title}</h2>
        <h2>{post.author}</h2>
      </button>
    </>
  )
}

export default PostCard

