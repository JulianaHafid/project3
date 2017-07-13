import React, { Component,PropTypes } from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import './TalentForm.css';

/**
 * Create
 */
export class TalentForm extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);

    this.state = {
      talent: null
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps" + nextProps);
    axios.get('/talent/'+ nextProps.talent)
      .then( (response) => {
        console.log("ActiveTalent: ",response);
        this.setState({
          talent: response.data
        })
      })
      .catch((error)=> {
        console.log("Err from TalentForm: " + error);
      });
  }

  onChange = (e) => {

    let talent = this.state.talent || {};
    const key = e.target.id;
    const value = e.target.value;
    talent[key] = value;

    this.setState({
      talent: talent
    });
  }

  addNewTalent = (e) => {
    console.log('addNewTalent');
    console.log (this.state.talent);
    axios.post('/talent', this.state.talent)
      .then( (response) => {
        this.setState({
          talent: response.data
        })
      })
      .catch((error)=> {
        console.log("addNewTalent error: " + error);
      });
  }


  updateTalent = (e) => {
    console.log('updateTalent');

    axios.put('/talent/'+ this.state.talent._id, {talent: this.state.talent})
      .then( (response) => {
        this.setState({
          talent: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  deleteTalent = (e) => {
    console.log('deleteTalent');

    axios.delete('/talent/'+ this.state.talent._id)
      .then( (response) => {
        this.setState({
          talent: null
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
        <h2>Talent Profile</h2>
      </div>
      <form className="col-md-6 col-md-offset-1 talentform">
        <div className="clearfix"></div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text"
                 className="form-control"
                 id="name"
                 placeholder="Talent Name"
                 onChange={this.onChange}
                 value={this.state.talent && this.state.talent.name ? this.state.talent.name : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input type="text"
                 className="form-control"
                 id="contact"
                 placeholder="Phone Number"
                 onChange={this.onChange}
                 value={this.state.talent && this.state.talent.contact ? this.state.talent.contact : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text"
                 className="form-control"
                 id="address"
                 placeholder="Address"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.address ? this.state.talent.address : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <input type="text"
                 className="form-control"
                 id="qualification"
                 placeholder="Qualification"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.qualification ? this.state.talent.qualification : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="salary">Min Salary</label>
          <input type="text"
                 className="form-control"
                 id="salary"
                 placeholder="Min Salary"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.salary ? this.state.talent.salary : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="skillList">Skill</label>
          <input type="text"
                 className="form-control"
                 id="skillList"
                 placeholder="Skill"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.skillList ? this.state.talent.skillList : ""}/>
        </div>

        <Link to={'/jobView'}>
        <button type="button"
                className="btn btn-primary col-md-3 "
                onClick={ this.addNewTalent }>Create Profile</button>
        </Link>
        <button type="button"
                className="btn btn-primary col-md-3 col-md-offset-6"
                onClick={ this.logout }>Logout</button>
      </form>


      </div>
    );
  }
}

export default TalentForm;
