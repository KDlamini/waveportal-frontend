import React from 'react'

function WalletCard({
  defaultAccount, errorMessage, viewCharacters, isConnected,
  setIsConnected, setDefaultAccount, setErrorMessage, ethereum
}) {

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
    <div className="walletContainer">
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
          <span className="wave-btn-span">Message your favorite superhero or villain!</span> 
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