import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Navigation() {
  return (
    <div>
      <div className='navbar'>
        <h1 className='title'>Community UCU</h1>
        <ul className='nav-list'>
          <Link to="/about"><li><button>About</button></li></Link>

          <li><button><Link to="/membership">Membership</Link></button></li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
