import React from "react";
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      {completed}/{total} Tareas completadas
    </h2>
  );
}

export { TodoCounter };
