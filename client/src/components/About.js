import React from 'react';
import HeaderPic from '../assets/images/aboutHeader.jpg';
import Pic1 from '../assets/images/aboutPic1.jpg';
import Pic2 from '../assets/images/patioImage.jpg';
import Pic3 from '../assets/images/poster.jpg';
import Pic4 from '../assets/images/logo.jpg';


function About() {
    const styles = {
        headerPic: {
            height: '500px',
            backgroundImage: `url(${HeaderPic})`,
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
        }
      }
    return(
        <div>
            <header style={styles.headerPic}>
                <h1 style={styles.headerText}>About</h1>
            </header>


            <div className="container-fluid">
                <div className="row my-5 bg-danger">
                    <div className="col-md-6">
                        <h1 className="text-center text-white my-5">Catchy Title</h1>
                        <p className="text-center text-white"> Discription Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="col-md-6 my-5">
                        <img style={styles.textImage} src={Pic1} alt="Delicious wrap" />
                    </div>
                </div>
                <div className="row bg-warning">
                    <div className="col-md-4 my-5">
                        <img style={styles.images} src={Pic2} alt="Patio" />
                    </div>
                    <div className="col-md-4 my-5">
                        <img style={styles.images} src={Pic3} alt="Poster" />
                    </div>
                    <div className="col-md-4 my-5">
                        <img style={styles.images} src={Pic4} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default About;