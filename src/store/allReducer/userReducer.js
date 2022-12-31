const initialState = { login: {}, User: [] };

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "GETALLUSER_SUCCESS":
      return {
        success: true,
        User: action.payload,
      };

    default:
      return state;
  }
}
