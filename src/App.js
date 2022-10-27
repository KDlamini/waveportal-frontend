import * as React from "react";
import { ethers } from "ethers";
import WalletCard from './components/WalletCard';
import Navbar from './components/Navbar'
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <section className="main-container">
      <Navbar />

      <div className="content-wrapper">
        <div className="dataContainer">
          <div className="header">
            Hello Blockchain Enthusiast! <span have role="img" aria-label="Emoji">👋</span>
          </div>

          <p className="greeting">Welcome to my Smart Portal</p>

          <div className="bio">
            <p>I am Simo, a full stack developer aspiring to be a Smartchain developer.</p>
            <p>Connect your Ethereum wallet and wave at me with your favorite pokemon!</p>
          </div>

          <WalletCard wave={wave} />
        </div>
      </div>
    </section>
  );
}
