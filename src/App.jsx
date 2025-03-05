import TodoHeading from "./TodoHeading";
import TodoList from "./TodoList";
import Items from "./Items";
import './App.css' 
import { useReducer, useState } from "react";
import ErrorMsg from "./ErrorMsg";
import { todoContext } from "./store/Todo-Context";
import TodoItemsContextProvider from "./store/Todo-Context";



function App() {

  return (
   <TodoItemsContextProvider>
    <center className="todo-container">
      <TodoHeading></TodoHeading>
      <TodoList ></TodoList>
       <ErrorMsg></ErrorMsg>
      <Items ></Items>
    </center>
    </TodoItemsContextProvider>
  );
}

export default App;
