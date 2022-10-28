import * as React from "react";
import { ethers } from "ethers";
import WalletCard from './components/WalletCard';
import Navbar from './components/Navbar'
import CharacterModal from "./components/CharacterModal";
import './App.css';

export default function App() {
  const [isConnected, setIsConnected] = React.useState(false);
  const [modalIsOpen, setModalIsOpen] = React.useState(true);

  const wave = () => {
    setModalIsOpen(!modalIsOpen)
  }
  
  return (
    <main className="main-container">
      <section className="banner-container">
        <Navbar isConnected={isConnected}/>

        <div className="content-wrapper">
          <div className="dataContainer">
            <div className="header">
              Hello Blockchain Enthusiast! <span have role="img" aria-label="Emoji">👋</span>
            </div>

            <p className="greeting">Welcome to my Smart Portal</p>

            <div className="bio">
              <p>I am Simo, a full stack developer aspiring to be a Smartchain developer.</p>
              <p>Connect your Ethereum wallet and tag me with your favorite pokemon!</p>
            </div>

            <WalletCard
              wave={wave}
              isConnected={isConnected}
              setIsConnected={setIsConnected}
            />
          </div>
        </div>
      </section>

      <CharacterModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </main>
  );
}
