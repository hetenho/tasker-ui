import React from 'react';

const handleLogin = () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  fetch(`http://localhost:3010/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log('wat? '+JSON.stringify(res));
    })
    .catch(e => {
      console.log('error? '+JSON.stringify(e));
    });
};

const Login = () => {
  return (
    <form method="GET">
      <input type="email" name="username" id="username" />
      <input type="password" name="password" id="password" />
      <button type="button" onClick={handleLogin}>Login</button>
    </form>
  );
};

export default Login;