import React from 'react';
import logo from './logo.svg';
import './styles/App.css';

import Header from "./components/Header"
import GuessSection from "./components/GuessSection"
import Feedback from "./components/Feedback"

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <GuessSection />
        <Feedback />
      </main>
    </div>
  );
}

export default App;
