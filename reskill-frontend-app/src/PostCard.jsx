import { useNavigate } from "react-router-dom";

function PostCard(props) {
  const navigate = useNavigate();
  const post = props.post;

  return (
    <>
      <button className="p-1 hover:p-0 " onClick={() => navigate(`/post/${post.id}`)}>
        <img className="rounded-xl min-w-full" src={post.thumbnailUrl} title={post.photoTitle} alt={post.photoTitle} width='1' height='1'></img>
        <div className="pb-1 pt-3 text-left text-font">{post.title}</div>
        <div className="text-left subtitle-color-font">{post.author}</div>
      </button>
    </>
  )
}

export default PostCard


