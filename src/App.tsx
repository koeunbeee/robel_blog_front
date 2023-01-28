import React from 'react';
import Router from './common/Router';
import Copyright from './components/Copyright';
import NavBar from './components/NavBar';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <>
      <NavBar />
      <MenuBar />
      <Router />
      <Copyright />
    </>
  );
}

export default App;
