import React from 'react';
import AboutPic from '../assets/images/AboutPic.jpg'


function About() {
    const styles = {
        headerPic: {
            height: '500px',
            backgroundImage: `url(${AboutPic})`,
            backgroundPosition: 'center',
        },
        headerText: {
            color:'white',
            textAlign:'center',
            lineHeight: '450px',
            fontSize: '75px',
        }
      }
    return(
        <div>
            <header style={styles.headerPic}>
                <h1 style={styles.headerText}>About</h1>
            </header>
        </div>
    )

}
export default About;