import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import JobListView from '../JobListView/JobListView';
import Search from '../Search/Search';
import {searchJobs} from '../../API/JobAPI';

import './JobList.css';

/****************************************************
 * JobList
 ***************************************************/
export class JobList extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);

    this.state = {
      jobs: [],
      activeJob: this.props.activeJob
    }
  }

  componentDidMount() {

    console.log("JobList.componentDidMount");

    axios.get('/job/')
      .then( (response) => {
        console.log("This is the response: " + response);
        this.setState({
          jobs: response.data
        });
      })
      .catch((error)=> {
        console.log("Err in CompDidMount: "+error);
      });
  }

  onClick = (id) => {
    this.props.setActiveJob(id);
  }


  addJobs = () => {
    const jobs = searchJobs(this.props.searchTerm, this.state.jobs);
    // console.log("Returned Jobs from search: " + this.state.jobs[0].title);
    return jobs.map((job) => {
      let isActive = job._id === this.state.activeJob ? "active" : "";
      return ( <JobListView job={job} key={ job._id } onClick={this.onClick} active={isActive} /> )
    });
  }

  render() {
    return (
      <div className="row" id="JobList">
          <Search />
         {this.addJobs()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
        searchTerm: state.internal.searchTerm
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
