import React from 'react';
import './Advantages.css';

function Advantages() {
  return (
    <div id="advantages">
      <h2 className="section-heading">Advantages of Joining Our DSC Community</h2>
      <p className="section-subheading">Here are some of the benefits you can gain by becoming a member of our community:</p>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img className="rounded-circle" src="https://images.pexels.com/photos/5541019/pexels-photo-5541019.png?auto=compress&cs=tinysrgb&w=600" alt="network" />
            <h3>Networking Opportunities</h3>
            <p>Connect with other like-minded individuals who share your passion for technology and innovation. Build your professional network and gain valuable industry connections.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img className="rounded-circle" src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=600" alt="knowledge" />
            <h3>Access to Knowledge</h3>
            <p>Gain access to a wealth of knowledge and resources on the latest trends and technologies in the industry. Attend workshops, online trainings, and other events to develop your skills and stay up-to-date.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img className="rounded-circle" src="https://images.pexels.com/photos/99820/pexels-photo-99820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="growth" />
            <h3>Career Growth</h3>
            <p>Take advantage of job opportunities, career guidance, and mentorship to help you launch your career in tech. Attend career fairs, connect with potential employers, and receive guidance from experienced alumni.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img className="rounded-circle" src="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=800" alt="community" />
            <h3>Community Building</h3>
            <p>Join a vibrant community of student developers who share your passion for technology and innovation. Participate in hackathons, meetups, and other events that promote collaboration and innovation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
