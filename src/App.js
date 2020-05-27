import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import FetchPosts from './components/FetchPosts';
import FetchPost from './components/FetchPost';

function App() {
  return (
    <div className="App">
      <FetchPost id={1}/>
      {/* <FetchPosts /> */}
    </div>
  );
}

export default App;
