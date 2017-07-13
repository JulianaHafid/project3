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
        <div >
          <div className="input-group">
            <input className="form-control input-md"
                   type="text"
                   placeholder="Search"
                   onKeyUp={this.onChange} />
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
