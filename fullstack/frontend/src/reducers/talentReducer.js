const talentsReducer = (state = [], action) => {

  console.log("in my talentsReducer" , action);

  switch (action.type) {
    case "CREATE_TALENT":
      break;
    case "READ_TALENT":
      break;
    case "UPDATE_TALENT":
      break;
    case "DELETE_TALENT":
      break;
    default:
        return state;
  }
}


export default talentsReducer;
