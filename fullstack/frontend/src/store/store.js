import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import JobReducer from '../reducers/jobReducer.js'
import userReducer from '../reducers/userReducer.js'
import InternalReducer from '../reducers/Internal'
import EmployerReducer from '../reducers/employerReducer'
import TalentReducer from '../reducers/talentReducer'
export let initStore = () => {

  const reducer = combineReducers( {
    jobs: JobReducer,
    user: userReducer,
    internal: InternalReducer,
    employers: EmployerReducer,
    talents: TalentReducer,
  });

  const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

  return store;
}
