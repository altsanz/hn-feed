import React from 'react';

import './App.css';
import { HnPostList } from './features/hnPosts/HnPostList';
function App() {

  return (
    <div className="App">
      <header className="App-header">
       Hacker News feed
      </header>

      <div>
        <HnPostList></HnPostList>
      </div>
    </div>
  );
}

export default App;
