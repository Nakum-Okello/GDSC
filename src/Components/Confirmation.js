import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Confirmation.css"

function Confirmation() {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('formData');
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  if (!formData) {
    return (
      <div>
        <h1 className='nodata'>No form data found in local storage.</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>community <span className='span'>UCU</span></h1>
      <form>
        <h1>Registration Confirmed</h1>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <button onClick={handleLoginClick}>Login</button>
      </form>
    </div>
  );
}

export default Confirmation;
