
import axios from 'axios';

const loadingJobs = () => {
  return {
    type: "LOADING_JOBS",
    status: "Loading"
  }
}

const addJobs = (jobs) => {
  return {
    type: "ADD_JOBS",
    jobs
  }
}

const loadJobsError = (error) => {
  return {
    type: "LOAD_JOBS_ERROR",
    error
  }
}

export const initJobs = () => {
  return (dispatch) => {

    dispatch(loadingJobs());
    axios.get('/job/')
      .then( (response) => {
        dispatch(addJobs(response.data));
      })
      .catch((error)=> {
        dispatch(loadJobsError(error));
      });
  }
}

store.dispatch(initJobs);


export const createJob = (job) => {
  return {
    type: 'CREATE_JOB',
    job
  }
}

export const readJob = (job) => {
  return {
    type: 'READ_JOB',
    job
  }
}

export const updateJobs = (job) => {
  return {
    type: 'UPDATE_JOB',
    job
  }
}

export const deleteJob = (job) => {
  return {
    type: 'DELETE_JOB',
    job
  }
}
