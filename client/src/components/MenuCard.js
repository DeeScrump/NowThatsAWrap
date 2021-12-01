import React from 'react';
import '../pages/style.css';
import Card from 'react-bootstrap/Card';

// import Menu from '../components/Menu';
// import MenuItem from '../components/MenuItem';
// import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

function MenuCard({ item, handlePageChange }) {
    return (
      <>
        <Card className="menu-card">
        <Card.Img variant="top" src={item.image} style={{"height" : "300px"}} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Subtitle>Price: ${item.price}</Card.Subtitle>

          {/* validate user is a VIP member before they can leave a review Use CSS to hide button if no access */}

            <Link to="/menuitem">Review</Link>

        </Card.Body>
      </Card>
      </>
    )  
} 

export default MenuCard;

