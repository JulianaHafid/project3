import React, { Component, PropTypes } from 'react';

import {connect} from 'react-redux';
import {searchTerm} from '../../actions/Internal';


import './Search.css';

/**
 * Search
 */
export class Search extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);

    this.state ={
      searchTerm: ""
    }
  }


  onChange = (e) => {
      let searchText = e.target.value;
      console.log("Search Text Entered: ", searchText);
      this.props.changeSearchTerm(searchText);

      this.setState({
        searchTerm: searchText
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-2">
            <h6></h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ">
            <form action className="search-form">
              <div className="form-group has-feedback">
                <label htmlFor="search" className="sr-only">Search</label>
                <input type="text" onKeyUp={this.onChange} className="form-control" name="search" id="search" placeholder="Search Job Title" />
                <span className="glyphicon glyphicon-search form-control-feedback" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}



// Define state within the component
const mapStateToProps = (state) => {
    return {
        searchTerm : state.internal.searchTerm
    }
}

// Define actions within the component
const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchTerm: (text) => { dispatch(searchTerm(text)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
