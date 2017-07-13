import React, { Component } from 'react';
import { connect } from 'react-redux';

import JobList from './components/JobList/JobList';
import Create from './components/Create/Create';
import Login from './components/Login/Login';
import JobView from './components/JobView/JobView';
import EmployerForm from './components/EmployerForm/EmployerForm';
import TalentForm from './components/TalentForm/TalentForm';
import Search from './components/Search/Search';
import './App.css';

class App extends Component {
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
      <div className="App container-fluid">
        <div className="row">
          {isLoggedIn ? (
            <div className="isLoggedIn">
              <div className="col-md-12" id="JobList">
                <TalentForm/>
              </div>
            </div>
          ) : (
            <div className="col-md-4 col-md-offset-4" id="Login">
              <Login/>
            </div>
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
