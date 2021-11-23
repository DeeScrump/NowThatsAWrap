import React from 'react';
import HeaderPic from '../assets/images/aboutHeader.jpg';
import Pic1 from '../assets/images/aboutPic1.jpg';


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
            fontSize: '75px',
        },
        images: {
            height: '500px',
            width: '100%',
        }
      }
    return(
        <div>
            <header style={styles.headerPic}>
                <h1 style={styles.headerText}>About</h1>
            </header>


            <div class="container-fluid">
                <div class="row my-5">
                    <div class="col-md-6">
                        <h1 className="text-center my-5">Catchy Title</h1>
                        <p className="text-center"> Brief discription Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div class="col-md-6">
                        <img style={styles.images} src={Pic1} alt="Delicious wrap" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <p>Image 1</p>
                    </div>
                    <div class="col-md-4">
                    <p>Image 2</p>
                    </div>
                    <div class="col-md-4">
                    <p>Image 3</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default About;