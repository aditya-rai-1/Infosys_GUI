export const initialState = {
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_TOKEN":
      const tokenFromStorage = localStorage.getItem("token");
      if(tokenFromStorage === null || tokenFromStorage === undefined || tokenFromStorage === "null" || tokenFromStorage === "undefined"){
        return {
          token: null,
        };
      }
      return {
        token: tokenFromStorage,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "REMOVE_TOKEN":
      localStorage.removeItem("token");
      return {
        token: null,
      };
    case "SET_TOKEN":
      localStorage.setItem("token", action.token);
      return {
        token: action.token,
      };
    
    default:
      return state;
  }
};

export default reducer;
