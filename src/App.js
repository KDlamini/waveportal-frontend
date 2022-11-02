import * as React from "react";
import { ethers } from "ethers";
import WalletCard from './components/WalletCard';
import Navbar from './components/Navbar'
import CharacterModal from "./components/CharacterModal";
import CharacterData from './components/api';
import './App.css';
import abi from "./utils/SmartPortal.json";

export default function App() {
  const [isConnected, setIsConnected] = React.useState(false);
  const [modalIsOpen, setModalIsOpen] = React.useState(true);
  const [characters, setCharacters] = React.useState(CharacterData);
  const contractAddress = "0x9E66864a9A43c21a970F15fc63A32d25B735BF94"; //contract deployment address
  const contractABI = abi.abi; //reference the abi content

  const viewCharacters = () => setModalIsOpen(!modalIsOpen);

  const wave = async () => {
    try {
      const { ethereum } = window;
      // setModalIsOpen(!modalIsOpen)

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        let count = await wavePortalContract.getWaveStatus();
        console.log("Retrieved total wave count...", count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
}
  
  return (
    <main className="main-container">
      <section className="banner-container">
        <Navbar isConnected={isConnected}/>

        <div className="content-wrapper">
          <div className="messages-container">
          messages
          </div>
          <div className="wallet-container">
            <div className="greeting-wrapper">
              <div className="header">
                Hello Blockchain Enthusiast! <span have role="img" aria-label="Emoji">👋</span>
              </div>

              <p className="greeting">Welcome to my Smart Portal</p>

              <div className="bio">
                <p>I am Simo, a full stack developer aspiring to be a Smartchain developer.</p>
                <p>Connect your Ethereum wallet and tag me with your favorite superhero or villain!</p>
              </div>

              <WalletCard
                viewCharacters={viewCharacters}
                isConnected={isConnected}
                setIsConnected={setIsConnected}
              />
            </div>
          </div>
        </div>
      </section>

      <CharacterModal
        wave={wave}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        characters={characters}
        setCharacters={setCharacters}
      />
    </main>
  );
}
