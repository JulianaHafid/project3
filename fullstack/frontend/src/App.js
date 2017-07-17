import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import JobList from './components/JobList/JobList';
import Create from './components/Create/Create';
import Login from './components/Login/Login';
import JobView from './components/JobView/JobView';
import JobViewEmployer from './components/JobViewEmployer/JobViewEmployer';
import EmployerForm from './components/EmployerForm/EmployerForm';
import TalentForm from './components/TalentForm/TalentForm';
import Search from './components/Search/Search';
import Profile from './components/Profile/Profile';
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
      <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/jobView' component={JobView} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/jobViewEmployer' component={JobViewEmployer} />
            <Route render={() => {
              return <p>Not Found</p>
            }} />
          </Switch>
      </Router>
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
