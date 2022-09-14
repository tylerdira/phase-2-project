//todo 
// implement css to make site look good
//signup button on login page
//logout button on main page


import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import AddPostForm from './AddPostForm';
import MainContent from './MainContent';
import Profile from './Profile';
import Header from './Header';
import MostLiked from './MostLiked';
import Login from './Login'


function App() {
  const [user, setUser] = useState(null)
  const [postList, setPostList] = useState([])
  const [signUpForm, setSignUpForm] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(r => r.json())
      .then(data => setPostList(data))
  }, []
  )

  function handleLogin(user) {
    setUser(user)
  }

  

  if (!user) return <Login signUpForm={signUpForm} setSignUpForm={setSignUpForm} handleLogin={handleLogin}/>

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
    <div className='entire-page'>
      <Header setUser={setUser}/>
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
