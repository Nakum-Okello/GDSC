import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Get the saved form data from local storage
    const formData = JSON.parse(localStorage.getItem('formData'));

    // Check if the email and password match
    if (formData.email === email && formData.password === password) {
      // Navigate to the home page if the email and password match
      navigate('/Home');
    } else {
      // Display an error message if the email and password do not match
      setError('Invalid email or password.');
    }
  };

  return (
    <div className='login'>
      <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type='submit'>Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
    </div>
  );
}

export default LoginPage;
