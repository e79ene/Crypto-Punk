import './App.css';
import Header from './components/Header';
import PunkList from './components/PunkList';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [punkListData, setPunkListData] = useState([])

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios('https://testnets-api.opensea.io/assets?asset_contract_address=0xECc2f2e3FFDbD30844b17Da13bE18aE8b7F377C4&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
  
    return getMyNfts()
  }, [])
  
  return (
    <div className='app'>
      <Header />
      <CollectionCard
        id={0}
        name={'bandand'}
        traits={[{ value: 7 }]}
        image='https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg'
      />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
