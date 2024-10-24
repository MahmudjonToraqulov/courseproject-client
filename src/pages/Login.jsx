import React, { useState } from 'react'

function Login() {
  const [ username, setUsername] = useState('') 
  const [ email, setEmail] = useState('') 
  const [ password, setPassword] = useState('') 
  const [ error, setError ] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/auth/signin', { // Adjust URL as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      // Handle successful login (e.g., store token, redirect, etc.)
      console.log('Login successful', data);
      // You might want to save a token in local storage:
      localStorage.setItem('token', data.accessToken);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='bg-blue-500' style={{ background: 'black', color: 'white', width: '400px', padding: '20px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', textAlign: 'center', margin: '1rem auto' }}> Login Form </h2>
      <form  style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"> Username </label><br />
          <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} required style={{ color: 'black' }}/>
        </div><br />
        <div>
          <label htmlFor="email"> Email </label><br />
          <input type="email" id='email' value={email}  required onChange={(e) => setEmail(e.target.value)}  style={{ color: 'black' }}/>
        </div><br />
        <div>
          <label htmlFor="password" > Password </label><br />
          <input type="password" id='password' value={password}  onChange={(e) => setPassword(e.target.value)}  required style={{ color: 'black' }}/>
        </div>
        { error && <h2 style={{ color: 'red', fontSize: '24px' }}> { error } </h2> }
        <br />
        <button type="submit" style={{ background: 'green', padding: '12px 24px', marginBottom: '24px' }}> Login </button>
      </form>
    </div>
  )
}

export default Login
