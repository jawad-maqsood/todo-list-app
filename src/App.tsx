import React from 'react';

import './App.scss';

import Header from './components/header';

function App() {
  return (
    <div className="App">
      <div className='background-cover background-cover-light'>
        <div className="container content-body">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
