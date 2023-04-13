import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the email is valid
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Check if the phone number is valid
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number e.g 0773456560');
      return;
    }

    // Check if the password meets the requirements
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Save the form data to local storage
    const formData = { name, email, phone, password };
    localStorage.setItem('formData', JSON.stringify(formData));

    // Display a success message
    setMessage('You will receive confirmation shortly');

    // Redirect to the confirmation page
    navigate('/confirmation');
  };

  return (
    <div className='Signup'>
      <div>
        <h1>
          community <span className='span'>UCU</span>
        </h1>
      </div>
      <form className="signForm" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Phone:
          <input type='tel' value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <label>
          Password:
          <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <label>
          Confirm Password:
          <input type='password' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </label>
        <button type='submit'>Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SignUp;
