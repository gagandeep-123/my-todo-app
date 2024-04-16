import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./constants";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: {
    index
  }
})
