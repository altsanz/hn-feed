import React from 'react';

import './App.css';
import { useSearchPostsQuery } from './services/hn/hn.slice';

function App() {

  const { data, isLoading } = useSearchPostsQuery({ page: 0, query: ''});
  return (
    <div className="App">
      <header className="App-header">
       Hacker News feed
      </header>

      <div>
        <pre>{ isLoading ? 'loading' : JSON.stringify(data?.hits) }</pre>
      </div>
    </div>
  );
}

export default App;
