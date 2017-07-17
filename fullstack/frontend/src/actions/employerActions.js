
import axios from 'axios';


const loadingEmployers = () => {
  return {
    type: "LOADING_EMPLOYERS",
    status: "Loading"
  }
}

const addEmployers = (employers) => {
  return {
    type: "ADD_EMPLOYERS",
    employers
  }
}

const loadEmployersError = (error) => {
  return {
    type: "LOAD_EMPLOYERS_ERROR",
    error
  }
}

export const initEmployers = () => {
  return (dispatch) => {

    dispatch(loadingEmployers());
    axios.get('/employer/')
      .then( (response) => {
        dispatch(addEmployers(response.data));
      })
      .catch((error)=> {
        dispatch(loadEmployersError(error));
      });
  }
}

store.dispatch(initEmployers);


export const createEmployer = (employer) => {
  return {
    type: 'CREATE_EMPLOYER',
    employer
  }
}

export const readEmployer = (employer) => {
  return {
    type: 'READ_EMPLOYER',
    employer
  }
}

export const updateEmployers = (employer) => {
  return {
    type: 'UPDATE_EMPLOYER',
    employer
  }
}

export const deleteEmployer = (employer) => {
  return {
    type: 'DELETE_EMPLOYER',
    employer
  }
}
