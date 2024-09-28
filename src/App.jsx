import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMetaMask } from 'metamask-react'


function App() {
  const [count, setCount] = useState(0)
  const { status, connect, account } = useMetaMask();

  return (
    <>
        <h1>Connect to MetaMask</h1>
            {status === "connected" ? (
                <p>Connected account: {account}</p>
            ) : (
                <button onClick={connect}>Connect Wallet</button>
            )}
      
    </>
  )
}

export default App
