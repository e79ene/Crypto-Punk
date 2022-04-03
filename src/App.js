import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import PunkList from './components/PunkList';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [activePunk, setActivePunk] = useState(null)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios('https://testnets-api.opensea.io/assets?asset_contract_address=0xECc2f2e3FFDbD30844b17Da13bE18aE8b7F377C4&order_direction=asc')
      setPunkListData(openseaData.data.assets)
      setActivePunk(openseaData.data.assets[0])
    }
  
    return getMyNfts()
  }, [])
  
  return (
    <div className='app'>
      <Header />
      <Main activePunk={activePunk}/>
      <PunkList
        punkListData={punkListData}
        setActivePunk={setActivePunk}
      />
    </div>
  );
}

export default App;
