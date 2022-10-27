import React, { useState } from 'react'

function WalletCard({ wave }) {
  const [isConnected, setIsConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setErrorMessage('Kindly install MetaMask wallet extension!');
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setDefaultAccount(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  window.ethereum.on('accountsChanged', (accounts) => {
    setDefaultAccount(accounts[0]);
  });

  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });


  return (
    <div className="dataContainer">
      {!isConnected ? (
        <button
          className="waveButton"
          onClick={() => connectWallet()}
        >
          <span className="wave-btn-span">Connect MetaMask Wallet</span>
        </button>
      ) : (
          <button
          className="waveButton"
          onClick={wave}
          >
          <span className="wave-btn-span">Wave at me with your favorite Pokemon!</span> 
          </button>
      )}

      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      {defaultAccount && <p className="defaultAccount">Connected with account: {defaultAccount}</p>}
    </div>
  )
}

export default WalletCard