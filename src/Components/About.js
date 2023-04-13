import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="card">
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/earTjC0iSjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="card-body">
          <h2>Google Developer Student Clubs (GDSC)</h2>
          <p>
            GDSC is a global program that focuses on empowering students to build innovative solutions for their communities.
            It is a community where students from all backgrounds come together to learn, share knowledge, and work on real-world
            projects using Google technologies.
          </p>
          <p>
            With over 1,000 clubs in 100 countries, GDSC provides a platform for students to develop their technical skills and
            soft skills, such as teamwork and communication, while also making a positive impact on their communities through
            technology. Join us today to start your journey with GDSC!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
