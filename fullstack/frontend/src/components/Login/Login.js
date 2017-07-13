import React, { Component } from 'react';

import axios from 'axios';
import Header from '../Header/Header';
import './Login.css';


/**
 * Login
 */
export class Login extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);

    this.state = {
        email:"",
        password:"",
        error:""
    }
  }


  onChange = (e) => {
    var state = this.state;
    var key = e.target.id;
    var value = e.target.value;

    state[key] = value;
    console.log(state);
    this.setState(state);
  }


  localLogin = (e) => {
    e.preventDefault();
    axios.post('/auth/login', this.state)
      .then( (response) => {
        let data = response.data;
        if(data.error){
          console.log(data.message)
          this.setState({
            error:data.message
          });
        }else{
          console.error("AJAX: Logged in @ '/auth/user'");
          window.location.href = "/";
        }
      })
      .catch((error)=> {
        console.error("AJAX: Could not login @ '/auth/login'")
        this.setState({
          error:"Notify the dev team!"
        });
      });
  }

  localSignup = (e) => {
    e.preventDefault();
    axios.post('/auth/signup', this.state)
      .then( (response) => {

        let data = response.data;
        if(data.error){
          console.log(data.message)
          this.setState({
            error:data.message
          });
        }else{
          console.log("AJAX: Signed up @ '/auth/signup'");
          window.location.href = "/profile";
        }
      })
      .catch((error)=> {
        console.error("AJAX: Could not signup @ '/auth/signup'",error)
        this.setState({
          error:"Notify the dev team!"
        });
      });
  }


  facebookLogin = (e) => {
    e.preventDefault();
    window.location.href = "/auth/facebook";
  }

  render() {
    return (
      <div className="login">
        <Header />
        <form>
          <h3> Login or Sign up </h3>
          <div className="error">{this.state.error}</div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email"
                   className="form-control"
                   id="email"
                   placeholder="Email"
                   value={this.state.email}
                   onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password"
                   className="form-control"
                   id="password"
                   placeholder="Password"
                   value={this.state.password}
                   onChange={this.onChange}/>
          </div>
          <button type="submit"
                  className="btn btn-primary submit"
                  onClick={this.localLogin}>Login</button>
          <button type="submit"
                  className="btn btn-default submit"
                  onClick={this.localSignup}>Sign up</button>
          <div className="or">or</div>
          <button type="submit"
                  className="btn btn-primary facebook"
                  onClick={this.facebookLogin}>Login with Facebook</button>
        </form>
      </div>
    );
  }
}

export default Login;
