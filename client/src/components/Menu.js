import React, { useState, useEffect } from "react";
import axios from 'axios';
// import BreakfastQuesadillas from "../pages/breakfast/BreakfastQuesadillas";
// import BreakfastWraps from "../pages/breakfast/BreakfastWraps";
// import DeluxeOmelets from "../pages/breakfast/DeluxeOmelets";
// import ChickenWraps from "../pages/lunch/ChickenWraps";
// import SeafoodWraps from "../pages/lunch/SeafoodWraps";
// import VeganWraps from "../pages/lunch/VeganWraps";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MenuCard from './MenuCard';
// import MenuItem from './MenuItem';
import '../pages/style.css';

function Menu() {

  const styles = {
    headerPic: {
        height: '500px',
        backgroundImage: `url(${"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=1.00xw:0.753xh;0,0.132xh&resize=980:*"})`,
        backgroundPosition: 'center',
    },
    headerText: {
        color:'white',
        textAlign:'center',
        lineHeight: '450px',
        fontSize: '50px',
    },
    textImage: {
        height: '500px',
        width: '100%',
    },
    images: {
        height: '500px',
        width: '100%',
        border: '15px solid #88c53c',
    },
    aboutText: {
        color:'white',
        textAlign:'center',
        fontSize: '50px',
        padding: 'none',
    }
  }

  const [menuData, setMenuData] = useState([]);
  const url = 'http://localhost:3001/'

  useEffect(() => {
    componentDidMount();
  }, [])

  const componentDidMount = () => {
   axios.get(`${url}api/menu`)
    // GET request using axios with error handling
    .then(res => {
      const menuData = res.data;  
      console.log(res.data)
      setMenuData(menuData);
      return res.data
    });
  }



  return (
    <>
      <header style={styles.headerPic}>
        <h1 style={styles.headerText}>Menu</h1>
      </header>
      <Container>
        {/* <h2 className="menu-section">Breakfast</h2> */}
        <Row>
          
          {/* <h3 className="menu-title">Breakfast Quesadillas</h3> */}
          <div className="menu-card-list">
            {/* {BreakfastQuesadillas.map((item) => ( */}
            {menuData.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          
        </Row>


        
        {/* <Row>
          <h3 className="menu-title">Breakfast Wraps</h3>
          <div className="menu-card-list">
            {BreakfastWraps.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </Row>
        <Row>
          <h3 className="menu-title">Deluxe Omelets</h3>
          <div className="menu-card-list">
            {DeluxeOmelets.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </Row>
        <h2 className="menu-section">Lunch</h2>
        <Row>
          <h3 className="menu-title">Chicken Wraps</h3>
          <div className="menu-card-list">
            {ChickenWraps.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </Row>
        <Row>
          <h3 className="menu-title">Seafood Wraps</h3>
          <div className="menu-card-list">
            {SeafoodWraps.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </Row>
        <Row>
          <h3 className="menu-title">Vegan Wraps</h3>
          <div className="menu-card-list">
            {VeganWraps.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </Row> */}
      </Container>
    </>
  ); 
}

export default Menu;
