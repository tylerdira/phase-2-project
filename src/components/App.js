//todo 
// add 3rd route to link to a most liked post page
// adding a new comment (probably going to work with a patch similar to like button)
// implement css to make site look good


import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import AddPostForm from './AddPostForm';
import MainContent from './MainContent';
import Profile from './Profile';
import Header from './Header';
import MostLiked from './MostLiked';


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

  function handleNewComment(updatedComment) {
    const updateComment = postList.map((post) => 
    post.id === updatedComment.id ? updatedComment : post);
    setPostList(updateComment)
  }


  const mostPopularPost = [...postList].sort((a, b) => {
    return (b.likes - a.likes)
  }).slice(0, 5)


  return (
    <div>
      <Header />
      <Profile />
      <Routes>
        <Route path='/' element={<MainContent postList={postList} handleNewComment={handleNewComment} handleUpdateLike={handleUpdateLike} />}>
        </Route>
        <Route path='/AddPostForm' element={<AddPostForm newPost={newPost} />}>
        </Route>
        <Route path='/MostLiked' element={<MostLiked setPostList={setPostList} mostPopularPost={mostPopularPost} postList={postList}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
