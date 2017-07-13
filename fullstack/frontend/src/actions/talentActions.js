
import axios from 'axios';


const loadingTalents = () => {
  return {
    type: "LOADING_TALENTS",
    status: "Loading"
  }
}

const addTalents = (talents) => {
  return {
    type: "ADD_TALENTS",
    talents
  }
}

const loadTalentsError = (error) => {
  return {
    type: "LOAD_TALENTS_ERROR",
    error
  }
}

export const initTalents = () => {
  return (dispatch) => {

    dispatch(loadingTalents());
    axios.get('/talent/')
      .then( (response) => {
        dispatch(addTalents(response.data));
      })
      .catch((error)=> {
        dispatch(loadTalentsError(error));
      });
  }
}

store.dispatch(initTalents);


export const createTalent = (talent) => {
  return {
    type: 'CREATE_TALENT',
    talent
  }
}

export const readTalent = (talent) => {
  return {
    type: 'READ_TALENT',
    talent
  }
}

export const updateTalents = (talent) => {
  return {
    type: 'UPDATE_TALENT',
    talent
  }
}

export const deleteTalent = (talent) => {
  return {
    type: 'DELETE_TALENT',
    talent
  }
}
