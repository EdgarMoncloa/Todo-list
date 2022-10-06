import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import "./App.css";

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);
  return (
    <div className="main">
      <div className="container">
        <h1 className="title">TodoList</h1>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <p>Error.</p>}
          {loading && <p>Estamos cargado...</p>}
          {!loading && searchedTodos.length && <p>Crea tu primer todo!</p>}
          {searchedTodos.map((todo) => (
            <TodoItem
              text={todo.text}
              key={todo.text}
              completed={todo.completed}
              onComplete={() => {
                completeTodo(todo.text);
              }}
              onDelete={() => {
                deleteTodo(todo.text);
              }}
            ></TodoItem>
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </div>
  );
}

export { AppUI };
