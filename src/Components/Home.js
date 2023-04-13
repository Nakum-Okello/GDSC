import React from 'react';
import './Home.css';
import Navigation from './Nav';
import Offerings from './Offerings'
import Advantages from './Advantages';
import Developers from './Developers';


// import Features from '../components/Features';
// import Challenges from '../components/Challenges';
// import Reviews from '../components/Reviews';

function Home() {
  return (
    <div className='home'>
      <Navigation />
      <Offerings />
      <Advantages/>
      <Developers/>
    </div>
  );
}

export default Home;
