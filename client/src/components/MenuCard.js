import React from 'react';
import '../pages/style.css';
import Card from 'react-bootstrap/Card';
import Menu from '../components/Menu';
import Button from 'react-bootstrap/Button';
import { Route, Link } from 'react-router-dom';

function MenuCard({item, handlePageChange}) {
    return (
      <>
        <Card className="menu-card">
        <Card.Img variant="top" src={item.img} style={{"height" : "200px"}} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Subtitle>Price: ${item.price}.00</Card.Subtitle>
          {/* <Card.Text>
            {item.desc}
          </Card.Text> */}
          {/* validate user is a VIP member before they can leave a review Use CSS to hide button if no access */}
            <Link to="/about">Review</Link>
        </Card.Body>
      </Card>
      </>
    )  
} 

export default MenuCard;

