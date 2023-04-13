import React from 'react';
import { Link } from 'react-router-dom';
import "./Homepage.css";


const HomePage = () => {
    return (
      <div className="container">
        
        <div className="image-container">
        <h1>DSC Community <span>UCU</span></h1>
          <img src='https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='images'/>
        </div>
        <div className="form-container">
          <form>
            <h1>Welcome to DSCcommunity UCU</h1>
            <p>
              <label htmlFor="about">About DSCcommunity UCU:</label>
              <p > DSC community UCU is a platform that connects students and developers from Makerere University to create, learn, and share ideas on technology and entrepreneurship."</p>
            </p>
            <p>
              <label htmlFor="participate">How to participate:</label>
              <p > By joining DSC community UCU, you can participate in workshops, hackathons, and other tech events, collaborate on projects, and connect with other like-minded individuals who are passionate about using technology for good."</p>
            </p>
            <div>
              <Link to='/SignUp'>
              <button>Sign Up</button>
              </Link>
              <Link to='/Login'>
              <button>Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default HomePage;
