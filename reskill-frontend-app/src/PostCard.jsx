import { useNavigate } from "react-router-dom";

function PostCard(props) {
  const navigate = useNavigate();
  const post = props.post;

  return (
    <>
      <button className="p-1 hover:p-0 " onClick={() => navigate(`/post/${post.id}`)}>
        <img className="rounded-xl min-w-full" src={post.thumbnailUrl} title={post.photoTitle} alt={post.photoTitle}></img>
        <div className="text-left">{post.title}</div>
        <div className="text-left">{post.author}</div>
      </button>
    </>
  )
}

export default PostCard

