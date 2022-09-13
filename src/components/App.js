//todo 
// add 3rd route to link to a most liked post page
// search button functionality on home page
// adding a new comment (probably going to work with a patch similar to like button)
// implement css to make site look good


import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import AddPostForm from './AddPostForm';
import MainContent from './MainContent';
import Profile from './Profile';
import Header from './Header';


function App() {

  const [postList, setPostList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(r => r.json())
      .then(data => setPostList(data))
  }, []
  )

  const newPost = (newPost) => {
    setPostList(postList => [...postList, newPost])
  }

  function handleUpdateLike(updatedLike) {
    const updateLike = postList.map((post) =>
      post.id === updatedLike.id ? updatedLike : post
    );
    setPostList(updateLike);
  }


  return (
    <div>
      <Header />
      <Profile />
      <Routes>
        <Route path='/' element={<MainContent postList={postList} handleUpdateLike={handleUpdateLike} />}>
        </Route>
        <Route path='/AddPostForm' element={<AddPostForm newPost={newPost} />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
