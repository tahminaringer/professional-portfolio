import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <ul className="cards__items">
          <h1>A Little About Me</h1>
          <CardItem 
          src="images/family.jpg"
          text="Description of photo"
          label="Label"
          //path linked to line 8 on carditem.js
          path="/services"
          />
          <h1>Resume</h1>
          <CardItem 
          src="images/fairy-bouquet.jpg"
          text="Whimsical bridal bouquet in whites and yellows"
          label="Label"
          //path linked to line 8 on carditem.js
          path="/services"
          />
        </ul>
        <ul className="cards__items">
        <h1>Technical Portfolio</h1>
          <CardItem 
          src="images/fairy-bouquet.jpg"
          text="Description of photo"
          label="Label"
          //path linked to line 8 on carditem.js
          path="/services"
          />
           <h1>Floral Portfolio</h1>
          <CardItem 
          src="images/fairy-bouquet.jpg"
          text="Description of photo"
          label="Label"
          //path linked to line 8 on carditem.js
          path="/services"
          />
        </ul>
      </div>
    </div>
  )
}

export default Cards;