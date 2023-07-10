import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Buildyourwebsite.css';
import '@fortawesome/fontawesome-free/css/all.css';


const Dashboard = () => {
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch courses from the API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    // Fetch services from the API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const toggleCourseMenu = () => {
    setIsCourseOpen(!isCourseOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <ul>
          <li>
            <Link to="#" className="active">Dashboard</Link>
          </li>
          <li>
            <Link
              to="#"
              className={`feat-btn ${isCourseOpen ? 'active' : ''}`}
              onClick={toggleCourseMenu}
            >
              Course
              <span className={`fas fa-caret-down ${isCourseOpen ? 'rotate' : ''}`}></span>
            </Link>
            <ul className={`feat-show ${isCourseOpen ? 'show' : ''}`}>
              {courses.map(course => (
                <li key={course.id}>
                  <Link to="#">{course.title}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link
              to="#"
              className={`serv-btn ${isServicesOpen ? 'active' : ''}`}
              onClick={toggleServicesMenu}
            >
              Services
              <span className={`fas fa-caret-down ${isServicesOpen ? 'rotate' : ''}`}></span>
            </Link>
            <ul className={`serv-show ${isServicesOpen ? 'show' : ''}`}>
              {services.map(service => (
                <li key={service.id}>
                  <Link to="#">{service.title}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="#">Portfolio</Link>
          </li>
          <li>
            <Link to="#">Profile</Link>
          </li>
          <li>
            <Link to="#">Participant</Link>
          </li>
          <li>
            <Link to="#">Your Graph</Link>
          </li>
        </ul>
      </aside>
      <main className="main-content">
        {/* Add additional components and content for the main dashboard */}
        <h1>Welcome to the Dashboard!</h1>
        <p>Here you can access various features and information.</p>
      </main>
    </div>
  );
};

export default Dashboard;
