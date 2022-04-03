import React from 'react'
import './CollectionCard.css'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreLogo from '../assets/owner/more.png'
import './Main.css'

const Main = ({ activePunk }) => {
  if (!activePunk) return null
  
  return (
    <div className='main'>
      <div className='mainContent'>
        <div className='punkHighlight'>
          <div className='punkContainer'>
            <img
              className='selectedPunk'
              src={activePunk.image_preview_url}
              alt=''
            />
          </div>
        </div>
        <div className='punkDetails' style={{ color: '#fff' }}>
          <div className='title'>
            {activePunk.name}
            <span className='itemNumber'>•#{activePunk.token_id}</span>
          </div>
          <div className='owner'>
            <div className='ownerImageContainer'>
              <img src={activePunk.owner.profile_img_url} alt='' />
            </div>
            <div className='ownerDetails'>
              <div className='ownerNameAndHandle'>
                <div>{activePunk.owner.address}</div>
                <div className='ownerHandle'>@punkmaster</div>
              </div>
              <div className='ownerLink'>
                <img src={instagramLogo} alt='' />
              </div>
              <div className='ownerLink'>
                <img src={twitterLogo} alt='' />
              </div>
              <div className='ownerLink'>
                <img src={moreLogo} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main