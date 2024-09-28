import React, { useState } from 'react';
import { ethers } from 'ethers';

function App() {
    const [account, setAccount] = useState('');

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
        } else {
            alert('Please install MetaMask!');
        }
    };

    return (
        <div>
            <h1>Connect to MetaMask</h1>
            {account ? <p>Connected Account: {account}</p> : <button onClick={connectWallet}>Connect Wallet</button>}
        </div>
    );
}

export default App;