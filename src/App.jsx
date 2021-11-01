import React from 'react';

import Header from './components/Header';

import './App.css';
import BeersList from './components/BeersList';

function App() {
  return (
    <main className="App flex flex-wrap justify-center">
      <Header />
      <BeersList />
    </main>
  );
}

export default App;
