import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Login from '../Login/Login';
import Header from '../Header/Header';
import JobView from '../JobView/JobView';
import './Home.css';

/**
 * About
 */
export class Home extends Component { // eslint-disable-line react/prefer-stateless-function
  
  render() {
     const isLoggedIn = this.props.user._id;
    return (
      <div>
      <Header/>
      <div className="App container-fluid">
       <div className="row">
         {isLoggedIn ? (
           <div className="isLoggedIn">
             <div className="col-md-12" id="JobList">
               <JobView/>
             </div>
           </div>
         ) : (
           <div>
            <div className="swiper-container main-slider" id="myCarousel">
              <div className="swiper-wrapper">
                <div className="swiper-slide slider-bg-position" style={{background: 'url("http://grafreez.com/wp-content/temp_demos/burnout/img/1.jpg")'}} data-hash="slide1">
                <h2>Get a job that you love<br />Focus on what you do best</h2>
              </div>
            </div>
            </div>
            <section className="about-sec parallax-section" id="about">
             <div className="App container-fluid">
               <div className="col-md-4 col-md-offset-4" id="Login">
                 <Login/>
               </div>
             </div>
            </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
