const userReducer = (state = {}, action) => {

  console.log("in my user reducer: " , action);

  switch (action.type) {
    case "USER_UPDATE":
        return action.user || {};

    default:
        return state;
  }
}


export default userReducer;
