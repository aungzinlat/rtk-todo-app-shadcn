import { createSlice } from "@reduxjs/toolkit";

initialState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.list.push(action.payload);
    },
    removeTodo(state, action) {
      state.list = state.list.filter((todo) => todo?.id !== action.payload?.id);
    },
    updateStatus(state, action) {
      state.list = state.list.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isDone: true } : todo
      );
    },
  },
});

const { actions, reducer } = todoSlice;

export const { addTodo, removeTodo, updateStatus } = actions;

export default reducers;
