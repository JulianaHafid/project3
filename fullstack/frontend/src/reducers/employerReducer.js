const employersReducer = (state = [], action) => {

  console.log("in my employersReducer" , action);

  switch (action.type) {
    case "CREATE_EMPLOYER":
      break;
    case "READ_EMPLOYER":
      break;
    case "UPDATE_EMPLOYER":
      break;
    case "DELETE_EMPLOYER":
      break;
    default:
        return state;
  }
}


export default employersReducer;
