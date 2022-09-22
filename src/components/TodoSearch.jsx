import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="searchBar"
      placeholder="Que quiero hacer"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );
}

export { TodoSearch };
