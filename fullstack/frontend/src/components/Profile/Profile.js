import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmployerForm from '../EmployerForm/EmployerForm';
import TalentForm from '../TalentForm/TalentForm';
import Login from '../Login/Login';
import Header from '../Header/Header';
import './Profile.css';

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeJob: ""
    }
  }


  setActiveJob = (id) => {

    console.log("Active job: ", id);

    this.setState({
      activeJob: id
    })
  }

  render() {
    const isLoggedIn = this.props.user._id;

    return (
      <div>
      <Header className= "col-md-12"/>
      <div className="App container-fluid">
        <div className="row">
          {isLoggedIn ? (
            <div className="isLoggedIn">
              <div className="col-md-12" id="Profile">
                <EmployerForm/>
              </div>
            </div>
          ) : (
            <div className="col-md-4 col-md-offset-4" id="Login">
              <Login/>
            </div>
          )}
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
