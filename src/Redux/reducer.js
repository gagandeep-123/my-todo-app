import { ADD_TODO, DELETE_TODO } from "./constants";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload.text,
            complated: false
          }
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [
          state.todos.filter((ele, index) => index !== action.payload.index)
        ],
      };

    default:
      return state;
  }
};

export default reducer;