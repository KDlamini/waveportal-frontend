import React, { useState } from 'react'

function WalletCard({ wave, isConnected, setIsConnected}) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const { ethereum } = window;
  
  const connectWallet = async () => {
    try {
      if (!ethereum) {
        setErrorMessage('Kindly install MetaMask wallet extension');
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setDefaultAccount(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if(ethereum) {
    ethereum.on('accountsChanged', (accounts) => {
      setDefaultAccount(accounts[0]);
    });

    ethereum.on('chainChanged', () => {
      window.location.reload();
    });
  }


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
          <span className="wave-btn-span">Tag me with your favorite Pokemon!</span> 
          </button>
      )}

      {errorMessage && 
        <p className="errorMessage">
          {errorMessage}{' '}
          <span>
          <a href="https://metamask.io/download/" target="blank">here</a>.
          </span>
        </p>}
      {defaultAccount && <p className="defaultAccount">Connected with account: {defaultAccount}</p>}
    </div>
  )
}

export default WalletCard