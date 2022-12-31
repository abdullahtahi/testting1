const initialState = { chat: [] };

export default function ChatReducer(state = initialState, action) {
  switch (action.type) {
    case "CHAT_SUCCESS":
      return {
        success: true,
        chat: action.payload,
      };

    default:
      return state;
  }
}
