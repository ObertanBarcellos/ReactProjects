import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";

import Footer from './components/Footer';
import Header from './components/Header';
import Router from './pages/Router/index.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Router />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
