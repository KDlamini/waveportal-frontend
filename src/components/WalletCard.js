import React, { useState } from 'react'

function WalletCard({ wave }) {
  const [isConnected, setIsConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setErrorMessage('Kindly install MetaMask!');
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setDefaultAccount(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };


  return (
    <div className="dataContainer">
      {!isConnected ? (
        <button
          className="waveButton"
          onClick={() => connectWallet()}
        >
          Connect MetaMask wallet
        </button>
      ) : (
          <button
          className="waveButton"
          onClick={wave}
          >
            Wave at me with your favorite Pokemon! <span have role="img" aria-label="Emoji">👋</span> 
          </button>
      )}

      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      {defaultAccount && <p className="defaultAccount">Connected with account: {defaultAccount}</p>}
    </div>
  )
}

export default WalletCard