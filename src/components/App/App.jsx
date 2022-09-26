import React from "react";
import "./App.css";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: "Crear un todo", completed: false },
  { text: "Aprender react", completed: false },
  { text: "Crear un nodo virtual", completed: true },
  {
    text: "La dominacion del mundo mediante el conocimiento de la razon mediatica",
    completed: false,
  },
];
function App(props) {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue < 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (todoText) => {
    const todoIdx = todos.findIndex((todo) => todo.text === todoText);
    const newTodos = [...todos];
    newTodos[todoIdx].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (todoText) => {
    const todoIdx = todos.findIndex((todo) => todo.text === todoText);
    const newTodos = [...todos];
    newTodos.splice(todoIdx, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
