import React from 'react';
import { Button } from './Button';
import './Footer.css'

function Footer() {
  return(
    <div className="footer-container">
      <section className="footer-subscription">
      <p className="fotter-subscription-heading">
        Contact Tahmina
      </p>
      <div className="input-area">
        <form>
          <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
          <Button buttonStyle="btn--outline"> Subscribe</Button>
        </form>
      </div>
      </section> 
    </div>
  )
}

export default Footer;