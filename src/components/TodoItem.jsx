import React from "react";
import "./TodoItem.css";

const state = {
  pending: "☆",
  compleded: "★",
};
function TodoItem(props) {
  return (
    <li>
      <span className="status">{state.pending}</span>
      <p>{props.text}</p>
      <span className="delete">X</span>
    </li>
  );
}

export { TodoItem };
