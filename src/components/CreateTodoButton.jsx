import React from "react";
import "./CreateTodoButton.css";
function CreateTodoButton() {
  const onClickBtn = () => {
    console.log("Aqui se deberia abrir el modal");
  };
  return (
    <button className="addBtn" onClick={onClickBtn}>
      +
    </button>
  );
}

export { CreateTodoButton };
