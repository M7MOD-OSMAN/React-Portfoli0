import React from 'react'
import Wave from '../../img/wave.png'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Gitub from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt='' style={{ width: '100%' }} />
      <div className='f-content'>
        <span>m7mod.osman.m7mod@gmail.com</span>
        <div className='f-icons'>
          <a target='_blank' href='https://twitter.com/M7modOsman1'>
            <Twitter color='white' size={'3rem'} />
          </a>
          <a target='_blank' href='https://www.facebook.com/M7moud.osman/'>
            <Facebook color='white' size={'3rem'} />
          </a>
          <a target='_blank' href='https://github.com/M7MOD-OSMAN'>
            <Gitub color='white' size={'3rem'} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
