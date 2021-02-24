import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// const ADD = "add";
// const DEL = "delete";
// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };
// const delToDo = (id) => {
//   return {
//     type: DEL,
//     id,
//   };
// };
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type /*ADD*/:
//       return [{ text: action.payload/*action.text*/, id: Date.now() }, ...state];
//     case delToDo.type /*DEL*/:
//       return state.filter((toDo) => toDo.id !== action.payload /*action.id*/);
//     default:
//       return state;
//   }
// };

// const addToDo = createAction("add");
// const delToDo = createAction("delete");
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [delToDo]: (state, action) => {
//     return state.filter((toDo) => toDo.id !== action.payload);
//   },
// });

const toDos = createSlice({
  name: "toDoReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    del: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

//const store = createStore(reducer);
const store = configureStore({ reducer: toDos.reducer });

export const { add, del } = toDos.actions;

export default store;
