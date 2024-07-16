// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <img src={`${process.env.PUBLIC_URL}/anh3.png`} alt="Product" className="home-image" />
      </div>
    </div>
  );
}

export default Home;
