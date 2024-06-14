import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import PostsHomepage from './HomePage/PostsHomepage'
import Post from './Post'

function MainBody() {
  return (
    <div className="rat-pt-14 rat-pb-20">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/posts" replace />} />
          <Route exact path="/posts" element={<PostsHomepage />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </div>
  )
}

export default MainBody
