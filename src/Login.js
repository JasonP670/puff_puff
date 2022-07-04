import React, { useState } from 'react';
import './Login.css';
import { postData } from './utils';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, password };
    try {
      const response = await postData('login', data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='text-center min-vh-100'>
      <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit}>
          <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
          <div className='form-floating'>
            <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' onChange={handleUsernameChange} value={username} required />
            <label htmlFor='floatingInput'>Email Address</label>
          </div>
          <div className='form-floating'>
            <input type='password' className='form-control' id='floatingPassword' placeholder='password' onChange={handlePasswordChange} value={password} required />
            <label htmlFor='floatingPassword'>Password</label>
          </div>
          <button className='btn btn-lg btn-primary mt-3 w-100' type='submit'>
            Sign in
          </button>
          <p className='text-muted mt-5 mb-3'>&copy; 2022</p>
        </form>
      </main>
    </div>
  );
}
