import React from "react";
import { TodoProvider } from "../TodoContext";
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

function App(props) {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
