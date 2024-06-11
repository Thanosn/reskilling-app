import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import PostsHomepage from './PostsHomepage'
import Post from './Post'

function MainBody() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/posts" replace />} />
        <Route exact path="/posts" element={<PostsHomepage />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  )
}

export default MainBody

