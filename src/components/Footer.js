import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="footer-links">
        <div className="footer-link-wrapper">
          {/* Can copy and past footer-link-items for whatever is needed */}
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to='/sign-up'>How It Works</Link>
            <Link to='/'>References</Link>
            <Link to='/'>Resume</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of service</Link>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <Link to='/sign-up'>How It Works</Link>
              <Link to='/'>References</Link>
              <Link to='/'>Resume</Link>
              <Link to='/'>Investors</Link>
              <Link to='/'>Terms of service</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;