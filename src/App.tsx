import CoinCard from 'components/CoinCard';
import Header from 'components/Header';
import { useState } from 'react'
import './app.scss';
function App() {

  return (
    <div className="App">
        <Header />
        <CoinCard />
    </div>
  )
}

export default App
