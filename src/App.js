import React from 'react';
import logo from './logo.svg';
import './styles/App.css';

import Header from "./components/Header"
import GuessSection from "./components/GuessSection"

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <GuessSection />
      </main>
    </div>
  );
}

export default App;
