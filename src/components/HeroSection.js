import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted/>
      <h1>Who Is Tahmina</h1>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Dev Portfolio</Button>
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Floral Portfolio</Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Meet Tahmina <i className="far fa-play-circle" /></Button>
      </div>
    </div>
  )
}

export default HeroSection;