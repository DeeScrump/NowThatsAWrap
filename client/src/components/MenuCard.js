import React from 'react';
import '../pages/style.css';
import Card from 'react-bootstrap/Card';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
// import Button from 'react-bootstrap/Button';
import { Route, Link } from 'react-router-dom';

function MenuCard(item) {
    return (
      <>
        <Card className="menu-card">
        <Card.Img variant="top" src={MenuItem.image} style={{"height" : "300px"}} />
        <Card.Body>
          <Card.Title>{MenuItem.title}</Card.Title>
          <Card.Text>{MenuItem.description}</Card.Text>
          <Card.Subtitle>Price: ${MenuItem.price}</Card.Subtitle>

          {/* validate user is a VIP member before they can leave a review Use CSS to hide button if no access */}
            <Link to="/menuitem">Review</Link>
        </Card.Body>
      </Card>
      </>
    )  
} 

export default MenuCard;

