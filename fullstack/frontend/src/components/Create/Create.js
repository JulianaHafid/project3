import React, { Component,PropTypes } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import './Create.css';
/**
 * Create
 */
export class Create extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);

    this.state = {
      job: null

    }
  }


  componentWillReceiveProps(nextProps) {

    axios.get('/job/'+ nextProps.job)
      .then( (response) => {
        console.log("ActiveJob: ",response);
        this.setState({
          job: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  onChange = (e) => {

    let job = this.state.job || {};
    const key = e.target.id;
    const value = e.target.value;
    job[key] = value;

    this.setState({
      job: job
    });
  }

  addNewJob = (e) => {
    console.log('addNewJob');

    axios.post('/job', this.state.job)
      .then( (response) => {
        this.setState({
          job: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  updateJob = (e) => {
    console.log('updateJob');

    axios.put('/job/'+ this.state.job._id, {job: this.state.job})
      .then( (response) => {
        this.setState({
          job: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  deleteJob = (e) => {
    console.log('deleteJob');

    axios.delete('/job/'+ this.state.job._id)
      .then( (response) => {
        this.setState({
          job: null
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  logout = () =>{
    axios.get('/auth/logout')
      .then( (response) => {
        console.log("AJAX: Logged out @ '/auth/logout'");
        window.location.href = "/";
      })
      .catch((error)=> {
        console.log(error);
      });


  }

  render() {
    return (
      <div className="row">
      <div className="col-md-12 header">
        <h2>Job Post</h2>
      </div>
      <form className="col-md-6 col-md-offset-1">
        <div className="clearfix"></div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text"
                 className="form-control"
                 id="title"
                 placeholder="Job Title"
                 onChange={this.onChange}
                 value={this.state.job && this.state.job.title ? this.state.job.title : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="skillList">Skill List</label>
          <input type="text"
                 className="form-control"
                 id="skillList"
                 placeholder="SkillList"
                 onChange={this.onChange}
                 value={ this.state.job && this.state.job.skillList ? this.state.job.skillList : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="closingDate">Application Closing Date</label>
          <input type="text"
                 className="form-control"
                 id="closingDate"
                 placeholder="DD/MM/YYYY"
                 onChange={this.onChange}
                 value={ this.state.job && this.state.job.closingDate ? this.state.job.closingDate : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <input type="text"
                 className="form-control"
                 id="qualification"
                 placeholder="Qualification"
                 onChange={this.onChange}
                 value={ this.state.job && this.state.job.qualification ? this.state.job.qualification : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="maxSalary">Max Salary</label>
          <input type="text"
                 className="form-control"
                 id="maxSalary"
                 placeholder="Max Salary"
                 onChange={this.onChange}
                 value={ this.state.job && this.state.job.maxSalary ? this.state.job.maxSalary : ""}/>
        </div>
        <Link to={'/jobViewEmployer'}>
        <button type="button"
                className="btn btn-primary col-md-3"
                onClick={ this.updateJob }>Update</button>
        </Link>
        <Link to={'/jobViewEmployer'}>
        <button type="button"
                className="btn btn-primary col-md-3"
                onClick={ this.deleteJob }>Delete</button>
        </Link>
        <Link to={'/jobViewEmployer'}>
        <button type="button"
                className="btn btn-primary col-md-3"
                onClick={ this.addNewJob }>Add new job</button>
        </Link>
        <Link to={'/'}>
        <button type="button"
                className="btn btn-primary col-md-3"
                onClick={ this.logout }>Logout</button>
        </Link>
      </form>

      </div>
    );
  }
}

export default Create;
