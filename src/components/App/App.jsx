import React from "react";
import "./App.css";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Crear un todo", completed: false },
//   { text: "Aprender react", completed: false },
//   { text: "Crear un nodo virtual", completed: true },
//   {
//     text: "La dominacion del mundo mediante el conocimiento de la razon mediatica",
//     completed: false,
//   },
// ];

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (localStorageItem) {
    parsedItem = JSON.parse(localStorageItem);
  } else {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem(itemName, stringifiedTodos);
    setItem(newTodos);
  };

  return [item, saveItem];
}

function App(props) {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");

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
    saveTodos(newTodos);
  };

  const deleteTodo = (todoText) => {
    const todoIdx = todos.findIndex((todo) => todo.text === todoText);
    const newTodos = [...todos];
    newTodos.splice(todoIdx, 1);
    saveTodos(newTodos);
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
