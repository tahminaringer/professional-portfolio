import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
      <h1>Check this out!</h1>
      <div className="cards__container">
        <ul className="cards__items">
          <CardItem 
          src="images/family.jpg"
          text="Description of photo"
          label="Label"
          //path linked to line 8 on carditem.js
          path="/services"
          />
          <CardItem 
          src="images/fairy-bouquet.jpg"
          text="Whimsical bridal bouquet in whites and yellows"
          label="Label"
          //path linked to line 8 on carditem.js
          path="/services"
          />
        </ul>
        <ul className="cards__items">
          <CardItem 
          src="images/fairy-bouquet.jpg"
          text="Description of photo"
          label="Label"
          //path linked to line 8 on carditem.js
          path="/services"
          />
          <CardItem 
          src="images/img-25.jpg"
          text="Description of photo"
          label="Label"
          //path linked to line 8 on carditem.js
          path="/services"
          />
          <CardItem 
          src="images/img-35.jpg"
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