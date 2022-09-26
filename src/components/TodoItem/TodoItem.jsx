import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const onComplete = () => {
    props.onComplete();
  };
  const onDelete = () => {
    props.onDelete();
  };
  return (
    <li className={`${props.completed && "task-completed"}`}>
      <span
        className={`status ${props.completed && "icon-completed"}`}
        onClick={onComplete}
      >
        ★
      </span>
      <p className={`${props.completed && "text-completed"}`}>{props.text}</p>
      <span className="delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
