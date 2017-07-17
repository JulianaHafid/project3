const initialState = {
  searchTerm: ""
}

const internal = (state = initialState, action) =>{

console.log("in my internal reducer: " , action);
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.text
      }
    break;
    default:
      return state
  }
}

export default internal;
