import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        <span have role="img" aria-label="Emoji">👋</span> Hey there!
        </div>

        <div className="bio">
        I am Simo and I am a full stack developer isn't that awesome? Connect your Ethereum wallet and wave at me with your favorite pokemon!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
