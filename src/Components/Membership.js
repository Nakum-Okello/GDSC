import React, { useState, useEffect } from 'react';
import './Membership.css';

function Membership() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
      setUsers((prevUsers) => [...prevUsers, storedData]);
    }
  }, []);

  return (
    <div className="membership-container">
      <h1>Membership Section</h1>
      <div className="membership-grid">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img className="images" src={user.profilePicture} alt="Profile" />
            <div className="user-form">
              <form>
                <label>Email:</label>
                <input type="text" value={user.email} readOnly />
                <label>Phone:</label>
                <input type="text" value={user.phone} readOnly />
                <label>Status:</label>
                <input type="text" value="Member" readOnly />
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Membership;
