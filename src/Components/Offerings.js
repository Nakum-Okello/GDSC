import React from 'react';
import './Offerings.css';

function Offerings() {
  return (
    <div id="offerings">
      <h2 className="section-heading">What We Offer</h2>
      <p className="section-subheading">Here are some of the things you can expect as a member of our DSC community:</p>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <i className="fa fa-laptop"></i>
            <h3>Workshops and Trainings</h3>
            <p>Get access to a wide range of workshops and online trainings that will help you develop your technical skills and stay up-to-date with the latest trends and technologies in the industry.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <i className="fa fa-users"></i>
            <h3>Networking Opportunities</h3>
            <p>Connect with like-minded individuals who share your passion for technology and innovation. Meet other student developers, industry experts, and potential employers who can help you grow your professional network.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <i className="fa fa-briefcase"></i>
            <h3>Career Support</h3>
            <p>Get access to job opportunities and career guidance that can help you launch your career in tech. Attend career fairs, connect with potential employers, and receive mentorship and guidance from experienced alumni.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <i className="fa fa-users"></i>
            <h3>Community Building</h3>
            <p>Join a vibrant community of student developers who share your passion for technology and innovation. Participate in hackathons, meetups, and other events that promote collaboration and innovation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offerings;
