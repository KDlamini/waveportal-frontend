import * as React from "react";
import { ethers } from "ethers";
import WalletCard from './components/WalletCard';
import Navbar from './components/Navbar'
import CharacterModal from "./components/CharacterModal";
import CharacterData from './components/api';
import MessageCard from './components/MessageCard'
import './App.css';
import abi from "./utils/SmartPortal.json";

export default function App() {
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [defaultAccount, setDefaultAccount] = React.useState(null);
  const [isConnected, setIsConnected] = React.useState(false);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [characters, setCharacters] = React.useState(CharacterData);
  const [allWaves, setAllWaves] = React.useState([]);
  const [totalWaves, setTotalWaves] = React.useState(0);
  const contractAddress = "0x3e19c1747C4769F4C1C40d00C21D8108AE024dDf"; //contract deployment address
  const contractABI = abi.abi; //reference the abi content
  const { ethereum } = window;

  const findMetaMaskAccount = async () => {
    try {
      if (!ethereum) {
        return null;
      }
  
      const accounts = await ethereum.request({ method: "eth_accounts" });
  
      if (accounts.length !== 0) {
        const account = accounts[0];
        setIsConnected(true);
        return account;
      } else {
        return null;
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  React.useEffect(() => {
    const fetchWallet = async () => {
      const account = await findMetaMaskAccount();
      if (account !== null) {
        setDefaultAccount(account);
      }
    }

    fetchWallet();

    const fetchData = async () => {
      try {
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const smartPortalContract = new ethers.Contract(contractAddress, contractABI, signer);

          let count = await smartPortalContract.getWaveStatus();
          const waves = await smartPortalContract.getAllWaves();
          let wavesCleaned = [];

          waves.forEach(wave => {
            wavesCleaned.push({
              address: wave.waver,
              message: wave.message,
              character: wave.character,
              characterIndex: wave.characterIndex,
              timestamp: new Date(wave.timestamp * 1000),
            });
          });
  
          setTotalWaves(count.toNumber())
          setAllWaves(wavesCleaned);
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  });

  const viewCharacters = () => setModalIsOpen(!modalIsOpen);

  const wave = async (name, index, message) => {
    // setModalIsOpen(!modalIsOpen)

    try {
      if (ethereum) {
        console.log(name, index, message);
        // const provider = new ethers.providers.Web3Provider(ethereum);
        // const signer = provider.getSigner();
        // const smartPortalContract = new ethers.Contract(contractAddress, contractABI, signer);
        
        // let count = await smartPortalContract.getWaveStatus();
        // /*
        // * Execute the actual wave from your smart contract
        // */
        // const waveTxn = await smartPortalContract.wave(name, index);
        // console.log("Mining...", waveTxn.hash);

        // await waveTxn.wait();
        // console.log("Mined -- ", waveTxn.hash);

        // count = await smartPortalContract.getWaveStatus();
        // setTotalWaves(count.toNumber())
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
            <p className="waves">{totalWaves} total waves</p>
            {/*
              allWaves ?
                <p className="no-messages">No messages.</p>
              : allWaves.map((wave) => {
                return (
                  <MessageCard
                    key={wave.timestamp}
                    wave={wave}
                    defaultAccount={defaultAccount}
                  />
                )
              })
            */}
            <MessageCard
              defaultAccount={defaultAccount}
            />
          </div>
          <div className="wallet-container">
            <div className="greeting-wrapper">
              <div className="header">
                Hello Blockchain Enthusiast! <span role="img" aria-label="Emoji">👋</span>
              </div>

              <p className="greeting">Welcome to my Smart Portal</p>

              <div className="bio">
                <p>I am Simo, a full stack developer aspiring to be a Smartchain developer.</p>
                <p>Connect your Ethereum wallet and tag me with your favorite superhero or villain!</p>
              </div>

              <WalletCard
                defaultAccount={defaultAccount}
                errorMessage={errorMessage}
                viewCharacters={viewCharacters}
                isConnected={isConnected}
                setIsConnected={setIsConnected}
                setDefaultAccount={setDefaultAccount}
                setErrorMessage={setErrorMessage}
                ethereum={ethereum}
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
