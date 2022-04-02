import React from 'react'
import './PunkList.css'
import CollectionCard from './CollectionCard';

const PunkList = ({punkListData}) => {
  return (
    <div className='PunkList'>
      {punkListData.map(punk => 
        <CollectionCard
          key={punk.token_id}
          id={punk.token_id}
          name={punk.name}
          traits={punk.traits}
          image={punk.image_preview_url}
        />
      )}
    </div>
  )
}

export default PunkList