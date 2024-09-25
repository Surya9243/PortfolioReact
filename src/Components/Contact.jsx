import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
     <div className='contactName'>
     <h1>CONTACT SURYA</h1>
     <p>HERE I AM</p>
     </div>
   <div className='inputs'>
   <input type="text" placeholder='Name' />
     <input type="email" placeholder='Email'/>
     <input type="text" placeholder='Subject'/>
   </div>
   <div className='yourMsg'>
   <input type="text" placeholder='Your Message' />
   <button className='sendBtn'>SEND MESSAGE</button>
   </div>
   <div className='contactLogo'>
    <span><img src="https://img.icons8.com/windows/50/FFFFFF/facebook-new.png" alt="facebook-new"/></span>
    <span><img src="https://img.icons8.com/windows/50/FFFFFF/instagram-new.png" alt="instagram-new"/></span>
    <span><img src="https://img.icons8.com/ios-filled/50/FFFFFF/twitterx--v2.png" alt="twitterx--v2"/></span>
    <span><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/youtube-play.png" alt="youtube-play"/></span>
    <span><img src="https://img.icons8.com/material-outlined/24/FFFFFF/mail.png" alt="mail"/></span>
    <span><img src="https://img.icons8.com/sf-regular/48/FFFFFF/whatsapp.png" alt="whatsapp"/></span>
   </div>
    </div>
  )
}

export default Contact
