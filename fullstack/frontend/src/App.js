import React, { Component } from 'react';

import JobList from './components/JobList/JobList';
import TalentList from './components/TalentList/TalentList';
import Login from './components/Login/Login';

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
            <div className="col-md-2" id="JobList">
              <JobList setActiveJob={ this.setActiveJob} activeJob= {this.state.activeJob}/>
            </div>
            <div className="col-md-10" id="JobEdit">
                <Create job={this.state.activeJob}/>
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
