import React from "react";
import "../pages/style.css";
import Card from "react-bootstrap/Card";
import StarRating from "./StarRating";

const MenuItem = ({ item, rating, setRating }) => {
  return (
    <>
      <div>
        <Card className="menu-card">
          <Card.Img variant="top" src={item.img} style={{ height: "200px" }} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle>Price: ${item.price}.00</Card.Subtitle>
            <Card.Text>{item.desc}</Card.Text>
            <StarRating />
          </Card.Body>
        </Card>
      </div>
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label for="name">Review</label>
          <textarea
            placeholder="Add your review here"
            type="text"
            name="review"
            id="review"
            value=""
          />
          <label className="review-label">Rating</label>
          <StarRating setRating={setRating} rating={rating} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default MenuItem;
