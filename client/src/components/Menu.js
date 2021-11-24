import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BreakfastQuesadillas } from "../pages/breakfast/BreakfastQuesadillas";
// import BreakfastWraps from "../pages/breakfast/BreakfastWraps";
// import DeluxeOmelets from "../pages/breakfast/DeluxeOmelets";
// import ChickenWraps from "../pages/lunch/ChickenWraps";
// import SeafoodWraps from "../pages/lunch/SeafoodWraps";
// import VeganWraps from "../pages/lunch/VeganWraps";

function Menu() {
  console.log(BreakfastQuesadillas);
  return (
    <div className="container">
      <h1>BREAKFAST</h1>
      {BreakfastQuesadillas.map(({id, title, img, price, desc}) => (
        <article key={id} className="menu-item">
          <img src={img} alt={title} className="photo" />
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4 className="price">${price}</h4>
            </header>
            <p className="item-text">{desc}</p>
          </div>
        </article>
      ))}

      <div className="section-center"></div>
    </div>
  );
}

export default Menu;
