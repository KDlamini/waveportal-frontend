import React, { useState, useEffect } from 'react'

function WalletCard({ viewCharacters, isConnected, setIsConnected}) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
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

  useEffect(() => {
    const fetchWallet = async () => {
      const account = await findMetaMaskAccount();
      if (account !== null) {
        setDefaultAccount(account);
      }
    }

    fetchWallet();
  });
  
  const connectWallet = async () => {
    try {
      if (!ethereum) {
        setErrorMessage('No MetaMask extension found. Kindly install MetaMask wallet extension');
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
          onClick={viewCharacters}
          >
          <span className="wave-btn-span">Tag me with your favorite superhero or villain!</span> 
          </button>
      )}

      {errorMessage && 
        <p className="errorMessage">
          {errorMessage}{' '}
          {
            errorMessage.includes('Kindly install MetaMask') ?
              <span>
              <a href="https://metamask.io/download/" target="blank">here</a>.
              </span>
            : null
          }
        </p>}
      {defaultAccount && <p className="defaultAccount">Connected with account: {defaultAccount}</p>}
    </div>
  )
}

export default WalletCard