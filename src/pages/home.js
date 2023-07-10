import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pexel.jpg';
import '../styles/home.css';


function Home() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSubmissionSuccessful, setSubmissionSuccessful] = useState(false);
  const [isStudent, setIsStudent] = useState(true);
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('');
  const [description, setDescription] = useState('');

  const handleApplyNowClick = () => {
    setFormVisible(true);
    setStep(1);
  };

  const handleCloseFormClick = () => {
    setFormVisible(false);
    setSubmissionSuccessful(false);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Simulating form submission delay
    setSubmissionSuccessful(true);
    setTimeout(() => {
      setSubmissionSuccessful(false);
      setFormVisible(false); // Hide the form after successful submission
    }, 2000);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setDescription(response.data.body);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSelectStudent = () => {
    setIsStudent(true);
  };

  const handleSelectMentor = () => {
    setIsStudent(false);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className='home'>
      <div className='headerContainer' style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1>Welcome to Esipil Computer Center</h1>
        <p>{description}</p>
        <button onClick={handleApplyNowClick}>Apply Now</button>
      </div>

      {isFormVisible && (
        <div className='application-overlay'>
          {isSubmissionSuccessful && (
            <div className='success-message'>
              <div className='success-circle'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='green' width='80px' height='80px'>
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.17L5.83 12l1.42-1.41L11 14.17l7.75-7.75L18.17 9l-7.42 7.42z' />
                </svg>
              </div>
              <p>Submission Successful! Check your email.</p>
            </div>
          )}
          <div className='application-container'>
            <h2>Application Form</h2>
            {step === 1 && (
              <div className='form-group'>
                <label>Are you a student or a mentor?</label>
                <div className='radio-group'>
                  <label>
                    <input type='radio' name='userType' checked={isStudent} onChange={handleSelectStudent} />
                    Student
                  </label>
                  <label>
                    <input type='radio' name='userType' checked={!isStudent} onChange={handleSelectMentor} />
                    Mentor
                  </label>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className='form-group'>
                <label>Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            )}
            {step === 3 && (
              <div className='form-group'>
                <label>Age</label>
                <input type='number' value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
            )}
            {step === 4 && (
              <div className='form-group'>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            )}
            {step === 5 && (
              <div className='form-group'>
                <label>Phone</label>
                <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            )}
            {step === 6 && (
              <div className='form-group'>
                <label>Areas of Interest</label>
                <textarea value={interest} onChange={(e) => setInterest(e.target.value)} />
              </div>
            )}
            {step < 7 && (
              <div className='button-group'>
                {step !== 1 && <button onClick={handlePreviousStep}>Previous</button>}
                {step !== 6 && <button onClick={handleNextStep}>Next</button>}
                {step === 6 && (
                  <button className='submit-button' onClick={handleSubmitForm}>
                    Submit
                  </button>
                )}
              </div>
            )}
            <button className='close-button' onClick={handleCloseFormClick}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className='about-container'>
        <div className='about-card'>
          <h1>About Esipil Computer Center</h1>
          <p>
            Esipil Computer Center is a leading technology institute dedicated to providing high-quality computer education and training to individuals of all backgrounds. With a team of experienced instructors and a comprehensive curriculum, we aim to empower our students with the knowledge and skills needed to thrive in the digital age.
          </p>
          <p>
            Our state-of-the-art facilities, modern equipment, and hands-on approach ensure that our students receive practical, real-world experience in addition to theoretical knowledge. Whether you're a beginner looking to learn the basics or an experienced professional seeking to enhance your skills, Esipil Computer Center has a program for you.
          </p>
          <p>
            Join us today and unlock your potential in the exciting world of technology. Explore our courses and take the first step towards a successful career in the IT industry.
          </p>
          <Link to="/Buildyourwebsite" className="action_btn">
            View Units
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
