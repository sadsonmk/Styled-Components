import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialIcons = () => {
  return (

    <div>
      <ul>
        <li><a href="https://www.facebook.com" ><FaFacebook /></a></li>


        <li><a href="https://www.twitter.com">
          <FaTwitter />
        </a></li>
        <li><a href="https://www.youtube.com">
          <FaYoutube />
        </a></li>
      </ul >

    </div >
  )
}

export default SocialIcons