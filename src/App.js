import React from "react";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todoList = [
  { text: "Crear un todo", completed: false },
  { text: "Aprender react", completed: false },
  { text: "Crear un nodo virtual", completed: false },
  {
    text: "La dominacion del mundo mediante el conocimiento de la razon mediatica",
    completed: false,
  },
];
function App(props) {
  return (
    <div className="main">
      <div className="container">
        <h1 className="title">TodoList</h1>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todoList.map((todo) => (
            <TodoItem text={todo.text} key={todo.text}></TodoItem>
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;
