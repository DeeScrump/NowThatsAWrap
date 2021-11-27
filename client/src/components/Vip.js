import React, { useState } from 'react';
import { validateEmail, checkPassword } from '../utils/helpers';
import mainLogo from '../assets/images/logo.jpg';

function Vip() {

  const styles = {
    headerPic: {
      height: '500px',
      backgroundImage: `url(${mainLogo})`,
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
      height: '500px',
      width: '100%',
    },
    images: {
      height: '500px',
      width: '100%',
      border: '15px solid #88c53c',
    },
    formText: {
      color: 'white',
    }
  }

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and textarea
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the email is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Name and valid email are required');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
      // Then we check to see if the name is not valid. If so, we set an error message regarding the name.
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${name}`
      );
      return;      
    }
    alert(`Hello,${name}, welcome to the VIP Members site`)

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setPassword('');
  };

  return(
    <div>
      <header style={styles.headerPic}>
        <h1 style={styles.headerText}>VIP Sign-Up</h1>
      </header>


      <div className="container-fluid">
          <div className="row my-5 bg-dark">
              <div className="col-md-6">
                  <h1 className="text-center text-white my-5">STAY UP-TO-DATE ON THE LATEST NEWS & EVENTS</h1>
                  <p className="text-center text-white">Become a VIP member and be able to rate your favorite menu items, add reviews and comments. Receive emails about special offers and events.</p>
              </div>
              <div className="col-md-6 my-5">
                <form className="form-control bg-transparent border-0">
                  <p style={styles.formText}>Name: </p>
                  <input className='input-group'
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Name"
                  />
                  <br></br>
                  <p style={styles.formText}>Email: </p>
                  <input className='input-group'
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Email"
                  />
                  <br></br>
                  <p style={styles.formText}>Password: </p>                    
                  <input className='input-group'
                  value={password}
                  name="password"
                  onChange={handleInputChange}
                  type="password"
                  placeholder="Password"
                  />
                  <br></br>
                  <button type="button" onClick={handleFormSubmit}>Sign-In</button>
                </form>
                {errorMessage && (
                  <div>
                  <p style={styles.formText} className="error-text">{errorMessage}</p>
                  </div>
                )}
              </div>
          </div>          
      </div>


    </div>
  )
}
export default Vip;