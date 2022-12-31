const initialState = { login: {} };

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        success: true,
        login: action.payload,
      };

    default:
      return state;
  }
}
