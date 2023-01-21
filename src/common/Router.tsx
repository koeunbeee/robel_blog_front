import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '../pages/Main';
import Post from '../pages/Post';
import PostList from '../pages/PostList';
import Edit from '../pages/Edit';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/post/*" element={<Post />}>
        <Route path=":id" element={<Post />} />
      </Route>
      <Route path="/postlist/*" element={<PostList />}>
        <Route path=":page" element={<PostList />} />
      </Route>
      <Route path="/edit" element={<Edit />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
