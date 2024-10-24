import React, { useState } from 'react'

function Register() {
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      // Optionally log in the user after registration
      console.log('data -> ', data);
      
      localStorage.setItem('token', data.accessToken); // If you return a token on registration
      // onRegister(); // Call the onRegister prop to update the auth state
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className='bg-blue-500' style={{ background: 'black', color: 'white', width: '400px', padding: '20px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', textAlign: 'center', margin: '1rem auto' }}> Register Form </h2>
      <form  style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"> Username: </label><br />
          <input type="text" id='username' required style={{ color: 'black' }} value={username} onChange={(e) => setUsername(e.target.value)} />
        </div><br />
        <div>
          <label htmlFor="email"> Email: </label><br />
          <input type="email" id='email' required style={{ color: 'black' }} value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div><br />
        <div>
          <label htmlFor="password" > Password </label><br />
          <input type="password" id='password' required style={{ color: 'black' }} value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        { error && <h2 style={{ color: 'red', fontSize: '20px' }}> { error } </h2> }
        <br />
        <button type="submit" style={{ background: 'green', padding: '12px 24px', marginBottom: '24px' }}> Register </button>
      </form>
    </div>
  )
}

export default Register
