import * as React from "react";
import { ethers } from "ethers";
import WalletCard from './components/WalletCard';
import Navbar from './components/Navbar'
import CharacterModal from "./components/CharacterModal";
import CharacterData from './components/api';
import MessageCard from './components/MessageCard'
import Spinner from './components/Spinner'
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
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadingText, setLoadingText] = React.useState('');
  const contractAddress = "0xA305CFB1017ff6a95574b5aD6a6796a1bF904558"; //contract deployment address
  const contractABI = abi.abi; //reference the abi content
  const { ethereum } = window;

  const findMetaMaskAccount = React.useCallback(async () => {
    try {
      if (!ethereum) {
        return null;
      }
  
      const accounts = await ethereum.request({ method: "eth_accounts" });
  
      if (accounts.length !== 0) {
        const account = accounts[0];
        setDefaultAccount(account);
        setIsConnected(true);
        return account;
      } else {
        return null;
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, [ethereum]);

  const fetchData = React.useCallback(async () => {
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const smartPortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        setLoadingText("Loading messages...")

        let count = await smartPortalContract.getWaveStatus();
        const waves = await smartPortalContract.getAllWaves();
        console.log("Retrieved total wave count...", count.toNumber());
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


        setIsLoading(false)
        setTotalWaves(count.toNumber())
        setAllWaves(wavesCleaned);
      } else {
        setLoadingText("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }, [contractABI, ethereum])

  React.useEffect(() => {
    let wavePortalContract;

    findMetaMaskAccount();
    fetchData();

    const onNewWave = (from, character, characterIndex, message, timestamp) => {
      setAllWaves(prevState => [
        ...prevState,
        {
          address: from,
          message: message,
          character: character,
          characterIndex: characterIndex,
          timestamp: new Date(timestamp * 1000),
        },
      ]);
    };
  
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
  
      wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
      wavePortalContract.on("NewWave", onNewWave);
    }
  
    return () => {
      if (wavePortalContract) {
        wavePortalContract.off("NewWave", onNewWave);
      }
    };
  }, [findMetaMaskAccount, fetchData, contractABI, ethereum]);

  const viewCharacters = () => setModalIsOpen(!modalIsOpen);

  const wave = async (name, index, message) => {
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const smartPortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        setIsLoading(true)

        let count = await smartPortalContract.getWaveStatus();
        
        const waveTxn = await smartPortalContract.wave(name, index, message);
        setLoadingText(`Mining... <br/> Hash: ${waveTxn.hash}`);

        await waveTxn.wait();
        setLoadingText(`Mined... <br/> Hash: ${waveTxn.hash}`);

        count = await smartPortalContract.getWaveStatus();
        setTotalWaves(count.toNumber())
        setIsLoading(false)
      } else {
        setLoadingText("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const loading = () => <Spinner loadingText={loadingText}/>;

  const loadMessages = () => {
    return (
      allWaves.length ?
        allWaves.reverse().map((data) => {
        return (
          <MessageCard
            key={data.timestamp.toString()}
            data={data}
          />
        )
      })
      : <p className="no-messages">No messages.</p>
    )
  }
  
  return (
    <main className="main-container">
      <section className="banner-container">
        <Navbar isConnected={isConnected}/>

        <div className="content-wrapper">
          <div className="messages-container">
            <p className="waves">{totalWaves} {totalWaves === 1 ? "message" : "messages"}</p>
            {
              isLoading ? loading() : loadMessages()
            }
          </div>
          <div className="wallet-container">
            <div className="greeting-wrapper">
              <div className="header">
                Hello There Comic Nerds! <span role="img" aria-label="Emoji">👋</span>
              </div>

              <p className="greeting">Welcome to my Superhero Portal</p>

              <div className="bio">
                <p>I am Simo, a full stack developer aspiring to be a Smartchain developer.</p>
                <p>Connect your Ethereum wallet and pick your favorite superhero or villain!</p>
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
