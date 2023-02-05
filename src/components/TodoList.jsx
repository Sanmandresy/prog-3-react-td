import React, { useState } from "react";
import Dones from "./Dones";
import Todos from "./Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <main className="main__screen">
        <Todos setTodos={setTodos} bridge={todos} />
        <Dones doneList={todos} />
      </main>
    </>
  );
};

export default TodoList;
