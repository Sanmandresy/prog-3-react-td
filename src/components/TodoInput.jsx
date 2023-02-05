import React, { useState } from "react";

const TodoInput = (props) => {
  const { list, setTodoList } = props;
  const [todoInput, setTodoInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      var appendList = list.concat({ text: todoInput, completed: false });
      setTodoList(appendList);
      setTodoInput("");
    }
  };

  return (
    <>
      <input
        type="text"
        className="todo__input"
        placeholder="Add your todo..."
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </>
  );
};

export default TodoInput;
