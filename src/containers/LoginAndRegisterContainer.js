import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginAndRegister extends Component {

  getCurrView = () => this.props.location.state && this.props.location.state.register;

  handleClick = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const base = 'http://localhost:3010/auth';
    const url = this.getCurrView() ? `${base}/register` : `${base}/login`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(res => {
        const { token } = res;
        localStorage.setItem("TASKER_TOKEN", token);
        this.props.history.push("/");
      })
      .catch(e => {});
  }

  render() {
    return <div>
        <h1>{this.getCurrView() ? "Register" : "Login"}</h1>
        <form method="POST">
          <input type="email" name="username" id="username" />
          <input type="password" name="password" id="password" />
          <button type="button" onClick={this.handleClick}>
            {this.getCurrView() ? "Register" : "Login"}
          </button>
          <label>
            {this.getCurrView() ? "Already" : "Don´t"} have an account?
            <Link
              to={{
                pathname: this.getCurrView() ? "/signin" : "signup",
                state: { register: !this.getCurrView() }
              }}
            >
              {`${(this.getCurrView() ? "Login to an existing" : "Register a new")} account`}
            </Link>
          </label>
        </form>
      </div>;
  }
}

export default LoginAndRegister;