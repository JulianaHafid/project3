import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './JobListView.css';

/**
 * JobListView
 */
export class JobListView extends Component { // eslint-disable-line react/prefer-stateless-function
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

  onClick = (e) => {
    this.props.onClick(this.props.job._id);
  }

  render() {

    return (
      <div className={ "col-md-12 jobmini " + this.props.active} onClick={this.onClick} >
          <div className="title"><h4>{this.props.job.title}</h4></div>
          <div className="skillList"><h5><span>Required Skillset: </span>{this.props.job.skillList}</h5></div>
          <div className="closingDate"><h5><span>Application Closing Date: </span>{this.props.job.closingDate}</h5></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(JobListView);
