import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/contact.css'; 

function Contact() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search?query=background', {
          headers: {
            Authorization: 'https://www.pexels.com/api/', 
          },
        });
        const images = response.data.photos;
        const randomIndex = Math.floor(Math.random() * images.length);
        const imageUrl = images[randomIndex].src.large;

        setBackgroundImage(imageUrl);
      } catch (error) {
        console.error('Error fetching background image:', error);
      }
    };

    const interval = setInterval(fetchImage, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="contact-container"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <h2>Contact Us</h2>
      <p>Feel free to reach us through the following channels:</p>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-icon">&#9742;</span>
          <span className="contact-text">Phone: +1234567890</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">&#9993;</span>
          <span className="contact-text">Email: info@example.com</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">&#128241;</span>
          <span className="contact-text">WhatsApp: +1234567890</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">&#127760;</span>
          <span className="contact-text">Instagram: @example</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">&#62220;</span>
          <span className="contact-text">Facebook: /example</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">&#62217;</span>
          <span className="contact-text">Twitter: @example</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
