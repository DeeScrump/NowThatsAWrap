import React from 'react';
import deliveryPic from '../assets/images/deliveryPic.jpg';
import uberEats from '../assets/images/uberEats.png';
import doorDash from '../assets/images/doorDash.png';


function Online() {
    const styles = {
        headerPic: {
            height: '500px',
            backgroundImage: `url(${deliveryPic})`,
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
        centerAlign: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
      }
    return(
        <div>
            <header style={styles.headerPic}>
                <h1 style={styles.headerText}>Online Order Requests</h1>
            </header>

            <div className="container-fluid">
                <div className="row my-5 bg-dark">
                    <div style={styles.centerAlign} className="col-md-6 my-5 bg-success">
                        <a href="https://www.ubereats.com/store/now-thats-a-wrap!/c5DhfIDsRDufwDXK11339g?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkFsbCUyMEZpcmVkJTIwVXAhJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyQ2hJSlBjOGM1d2h2SzRnUlZGVVhjUFpfa1ZrJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQzLjUyNTI3NCUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS44OTM2MyU3RA%3D%3D" target="_blank" rel="noopenner noreferrer"><img style={styles.textImage} src={uberEats} alt="Uber Eats Delivery"/></a>
                    </div>
                    <div style={styles.centerAlign} className="col-md-6 my-5 bg-white">
                        <a href="https://www.doordash.com/store/now-thats-a-wrap!-miami-1388168" target ="_blank" rel="noopenner noreferrer"><img style={styles.textImage} src={doorDash} alt="Door Dash Delivery" /></a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Online;