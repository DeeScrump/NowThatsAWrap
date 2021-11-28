import React from 'react';
import '../pages/style.css';
import Card from 'react-bootstrap/Card';
import Menu from '../components/Menu';

function MenuCard({item}) {
    return (
      <>
        <Card className="menu-card">
        <Card.Img variant="top" src={item.img} style={{"height" : "200px"}} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Subtitle>Price: ${item.price}.00</Card.Subtitle>
          <Card.Text>
            {item.desc}
          </Card.Text>
        </Card.Body>
      </Card>
      </>
    )  
} 

export default MenuCard;

