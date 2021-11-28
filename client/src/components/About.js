import React from 'react';
import HeaderPic from '../assets/images/aboutHeader.jpg';
import Pic1 from '../assets/images/chefHaiven.jpg';
import Pic2 from '../assets/images/patioImage.jpg';
import Pic3 from '../assets/images/poster.jpg';
import Pic4 from '../assets/images/logo.jpg';
import Pic5 from '../assets/images/NTAW BusinessCard1.jpg';
import Pic6 from '../assets/images/NTAW BusinessCard2.jpg';


function About() {
    const styles = {
        headerPic: {
            height: '500px',
            backgroundImage: `url(${HeaderPic})`,
            backgroundPosition: 'center',
        },
        headerText: {
            height: '100%',
            color:'white',
            textAlign:'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '75px',
        },
        textImage: {
            maxHeight: '100%',
            maxWidth: '100%',
        },
        images: {
            maxHeight: '100%',
            maxWidth: '100%',
            border: '15px solid #88c53c',
        },
        aboutText: {
            color:'white',
            textAlign:'center',
            fontSize: '50px',
            padding: 'none',
        },
        evenOut: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }
      }
    return(
        <div>
            <header style={styles.headerPic}>
                <h1 style={styles.headerText}>About</h1>
            </header>


            <div className="container-fluid">
                <div className="row my-5 bg-danger">
                    <div className="col-md-6 align-content-center">
                        <h2 style={styles.aboutText} className="text-center text-white mt-5">Haiven A. Kornbluth</h2>
                        <h3 className="text-center text-white mb-5">Executive Chef/Owner</h3>

                        <p className="text-center text-white">Haiven Antoin Kornbluth is the culinary genius behind the movement of Now That's A Wrap. He is a culinary visionary that has traveled and explored diverse dynamics within the culinary world. With a vigorous six years in the restaurant industry, he knew that his style, technique and vision was too untamed for a typical restaurant. Although he pays homage to every skill and lesson developed by his mentors, he knew it was time to venture off on his own in 2016. He took a simple concept of a healthy wrap and added the "Haiven" flavor to each bite. His business, Now That’s A Wrap, became a product worth buzzin about. While building his business from the ground, he was able to complete his culinary education at the elite <span STYLE="font-weight:bold">Auguste Escoffier Culinary Arts School</span>, earning his Culinary Arts Diploma in 2018 and Associates of Science Degree In Culinary Arts 2020.</p>
                        <br></br>
                        <p className="text-center text-white">
                        Born in Miami, Florida, Chef Haiven’s first experience with food began with cooking in the kitchen with his grandparents who taught him to truly enjoy the creative process of cooking. Chef's culinary inspiration comes from his passion for cooking and uniting people for a unique experience. 
                        </p>
                        <br></br>
                        <p className="text-center text-white">
                        Chef Haiven has never been afraid of experimenting with various cuisines and finds joy in transforming basic dishes into the extra-ordinary. 
                        </p> 
 
                    </div>
                    <div className="col-md-6 my-5">
                        <img style={styles.textImage} src={Pic1} alt="Delicious wrap" />
                    </div>
                </div>
                <div className="row bg-warning">
                    <div className="col-md-4 my-5 d-flex" style={styles.evenOut}>
                        <img style={styles.images} src={Pic2} alt="Patio" />
                        <img style={styles.images} src={Pic5} alt="Logo" />
                    </div>
                    <div className="col-md-4 my-5">
                        <img style={styles.images} src={Pic3} alt="Poster" />
                    </div>
                    <div className="col-md-4 my-5" style={styles.evenOut}>
                        <img style={styles.images} src={Pic6} alt="Logo" />
                        <img style={styles.images} src={Pic4} alt="Patio" />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default About;