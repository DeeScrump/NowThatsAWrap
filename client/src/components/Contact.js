import React { useState } from 'react';
import { checkPassword, validateEmail } from '../utils/helpers';

function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [textArea, setTextArea] = useState('');
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
        setTextArea(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // First we check to see if the email is not valid or if the email is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email) || !name) {
        setErrorMessage('Email or Name is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the name is not valid. If so, we set an error message regarding the name.
      }
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setName('');
      setTextArea('');
      setEmail('');
    };

    return(
        <div>
            <h1>Contact Me</h1>

            <form className="form-control bg-transparent border-0">
                <p>Name: </p>
                <input className='input-group'
                value={name}
                name="Name:"
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
                />
                <br></br>
                <p>Email: </p>
                <input className='input-group'
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
                />
                <br></br>
                <p>Description: </p>                    
                <textarea className='input-group'
                value={textArea}
                name="text"
                onChange={handleInputChange}
                type="text"
                placeholder=""
                />
                <br></br>
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}
export default Contact;