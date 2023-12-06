import React from 'react'
import SearchIcon from '../assets/icons/search.svg'

function Contact() {
  return (
    <div className='container' id='contact-box'>
        <h5 className='contact-title'>BİZE ULAŞIN</h5>
        <p className='contact-text'>Projeniz mi var?</p>
        <form name='contact-email' netlify>
          <div class="input-group mb-3 justify-content-center">
            <input type="email" name='email' className='contact-input rounded-start-5 border-end-0' placeholder='E-postanızı Girin' />
            <button class="px-4 rounded-end-5 border-1 border-start-0 contact-input-btn" type="button" id="button-addon2">
              <img src={SearchIcon} alt="" />
            </button>
          </div>
          
        </form>
    </div>
  )
}

export default Contact