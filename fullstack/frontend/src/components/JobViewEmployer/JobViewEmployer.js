import React, { Component } from 'react';
import { connect } from 'react-redux';

import JobList from '../JobList/JobList';
import Login from '../Login/Login';
import Search from '../Search/Search';
import Header from '../Header/Header';
import Create from '../Create/Create';
import './JobViewEmployer.css';

class JobViewEmployer extends Component {
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
      <Header className="col-md-12" />
      <div className="jobsInfo">

        <div className="row">
          {isLoggedIn ? (
            <div className="isLoggedIn">
              <div className="col-md-3" id="JobList">
                <JobList setActiveJob={ this.setActiveJob } activeJob= {this.state.activeJob}/>
              </div>
              <div className="col-md-9" id="JobEdit">
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

export default connect(mapStateToProps, mapDispatchToProps)(JobViewEmployer);
