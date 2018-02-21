import React from 'react';

const handleRegister = () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  fetch(`http://localhost:3010/auth/register`, {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(res => res.json())
  .then(res => {
    
  })
  .catch(e => {
    
  }); 
};

const Register = () => {
  return (
    <form method="POST">
      <input type="email" name="username" id="username" />
      <input type="password" name="password" id="password" />
      <button type="button" onClick={handleRegister}>Register</button>
    </form>
  );
};

export default Register;