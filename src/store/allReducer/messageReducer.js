const initialState = { allMessages: [] };

export default function MessageReducer(state = initialState, action) {
  switch (action.type) {
    case "MESSAGE_SUCCESS":
      return {
        ...state,
        allMessages: action.payload,
      };

    default:
      return state;
  }
}
