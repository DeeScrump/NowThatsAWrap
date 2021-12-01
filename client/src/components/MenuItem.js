import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import "../pages/style.css";
import Menu from '../components/Menu';
import MenuCard from '../components/MenuCard';
import { getReview, createReview, updateReview, deleteReview } from '../utils/API';
// import StarRating from "./StarRating";

const MenuItem = () => {

  // set initial form state
  const [userReview, setUserReview] = useState([]);
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  
  const url = 'http://localhost:3001/'

  useEffect(() => {
    componentDidMount();
  }, [])

  const componentDidMount = () => {
   axios.get(`${url}api/menu/:id/reviews`)
    // GET request using axios with error handling
    .then(res => {
      const userReview = res.data;  
      console.log(res.data)
      setUserReview(userReview);
      return res.data
    });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserReview({ ...userReview, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setUserReview({
      reviews: '',
    });
  };

  return (
    <>
      <div>
        <Card className="menu-card">
          <Card.Img variant="top" src={MenuCard.image} style={{ height: "200px" }} />
          <Card.Body>
            <Card.Title>{MenuCard.title}</Card.Title>
            <Card.Text>{MenuCard.description}</Card.Text>
            <Card.Subtitle>Price: ${MenuCard.price}</Card.Subtitle>

            {/* <StarRating /> */}
          </Card.Body>
        </Card>
      </div>
      <div className="container" >
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          {/* show alert if server response is bad */}
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your review!
          </Alert>

          <Form.Group>
            <Form.Label htmlFor='review'>Review</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your review'
              name='review'
              onChange={handleInputChange}
              value={userReview.review}
              required
            />
            <Form.Control.Feedback type='invalid'>A review is required!</Form.Control.Feedback>
          </Form.Group>
        </Form>
        <Button
          disabled={!(userReview.review)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </div>
    </>
  );
};

export default MenuItem;
