import { useNavigate } from "react-router-dom";

import "./PostCard.css"

function PostCard(props) {
  const navigate = useNavigate();
  const post = props.post;

  return (
    <>
      <button className="rat-p-1 hover:rat-p-0" onClick={() => navigate(`/post/${post.id}`)}>
        <img className="rat-rounded-xl rat-min-w-full" src={post.thumbnailUrl} title={post.photoTitle} alt={post.photoTitle} width='1' height='1'></img>
        <div className="rat-pb-1 rat-pt-3 rat-text-left text-font">{post.title}</div>
        <div className="rat-text-left subtitle-color-font">{post.author}</div>
      </button>
    </>
  )
}

export default PostCard
