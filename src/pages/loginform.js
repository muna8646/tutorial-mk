import React, { useState } from 'react';
import BannerImage from '../assets/pexel.jpg';
import '../styles/home.css';
import '../styles/loginform.css';

function Home() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  const handleApplyNowClick = () => {
    setFormVisible(true);
    setSubmitted(false); // Reset the submission status
  };

  const handleCloseFormClick = () => {
    setFormVisible(false);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='home'>
      <div className='headerContainer' style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1>Welcome to Esipil Computer Center</h1>
        <p>Empowering you with innovative technology solutions.</p>
        <button onClick={handleApplyNowClick}>Apply Now</button>
      </div>

      {isFormVisible && (
        <div className='application-overlay'>
          <div className='application-container'>
            <h2>Application Form</h2>
            {isSubmitted ? (
              <div className='submission-success'>
                <svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='10' fill='#04AA6D' />
                  <path
                    fill='#FFF'
                    d='M9.8 16.3L5.3 11.8 6.7 10.3l3.1 3.1L16.3 7l1.4 1.4z'
                  />
                </svg>
                <p>Submission Successful!</p>
                <button onClick={handleCloseFormClick}>Close</button>
              </div>
            ) : (
              <form className='application-form' onSubmit={handleSubmitForm}>
                {/* Form fields go here */}
                <div className='form-group'>
                  <label htmlFor='name'>Name:</label>
                  <input type='text' id='name' name='name' />
                </div>
                {/* More form fields */}
                <button type='submit'>Submit</button>
                <button onClick={handleCloseFormClick}>Cancel</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
