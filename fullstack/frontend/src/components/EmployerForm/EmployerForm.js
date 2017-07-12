import React, { Component,PropTypes } from 'react';
import axios from 'axios';


/**
 * Create
 */
export class EmployerForm extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);

    this.state = {
      employer: null
    }
  }

  componentWillReceiveProps(nextProps) {

    axios.get('/employer/'+ nextProps.employer)
      .then( (response) => {
        console.log("ActiveEmployer: ",response);
        this.setState({
          employer: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  onChange = (e) => {

    let employer = this.state.employer || {};
    const key = e.target.id;
    const value = e.target.value;
    employer[key] = value;

    this.setState({
      employer: employer
    });
  }

  addNewEmployer = (e) => {
    console.log('addNewEmployer');

    axios.post('/employer', this.state.employer)
      .then( (response) => {
        this.setState({
          employer: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  updateEmployer = (e) => {
    console.log('updateEmployer');

    axios.put('/employer/'+ this.state.employer._id, {employer: this.state.employer})
      .then( (response) => {
        this.setState({
          employer: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  deleteEmployer = (e) => {
    console.log('deleteEmployer');

    axios.delete('/employer/'+ this.state.employer._id)
      .then( (response) => {
        this.setState({
          employer: null
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
        <h2>Company Profile</h2>
      </div>
      <form className="col-md-6 col-md-offset-1">
        <div className="clearfix"></div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text"
                 className="form-control"
                 id="name"
                 placeholder="Company Name"
                 onChange={this.onChange}
                 value={this.state.employer && this.state.employer.name ? this.state.employer.name : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input type="number"
                 className="form-control"
                 id="Contact"
                 placeholder="Phone Number"/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text"
                 className="form-control"
                 id="address"
                 placeholder="Address"
                 onChange={this.onChange}
                 value={ this.state.employer && this.state.employer.address ? this.state.employer.address : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="recruiter">Recruiter</label>
          <input type="text"
                 className="form-control"
                 id="recruiter"
                 placeholder="Full Name, Last Name"
                 onChange={this.onChange}
                 value={ this.state.employer && this.state.employer.address ? this.state.employer.recruiter : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="recruiterEmail">Recruiter Email</label>
          <input type="text"
                 className="form-control"
                 id="recruiterEmail"
                 placeholder="Email"/>
        </div>
        <div className="form-group">
          <label htmlFor="recruiterNumber">Recruiter Phone Number</label>
          <input type="text"
                 className="form-control"
                 id="recruiterNumber"
                 placeholder="Preferred Number"/>
        </div>
        <button type="button"
                className="btn btn-primary col-md-3"
                onClick={ this.updateEmployer }>Save</button>
        <button type="button"
                className="btn btn-primary col-md-3"
                onClick={ this.deleteEmployer }>Delete</button>

        <button type="button"
                className="btn btn-primary col-md-3"
                onClick={ this.addNewEmployer }>Create</button>
        <button type="button"
                className="btn btn-primary col-md-3"
                onClick={ this.logout }>Logout</button>

      </form>

      </div>
    );
  }
}

export default EmployerForm;
