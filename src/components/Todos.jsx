import React, { useState } from "react";
import TodoInput from "./TodoInput";

const Todos = ({ bridge, setTodos }) => {
  const [todos, setTodoList] = useState([]);

  const handleCheck = (index) => {
    const temp = [...todos];
    const todo = temp[index];
    todo.completed = !todo.completed;

    var doneList = bridge.concat(todo);
    setTodos(doneList);

    //If we want to remove the checked todos from the initial list
    const filteredTodos = todos.filter((todo, i) => i !== index);
    setTodoList(filteredTodos);
  };

  return (
    <>
      <section>
        <h1>TO DO</h1>
        <TodoInput setTodoList={setTodoList} list={todos} />
        <ul>
          {todos?.map((todo, index) => (
            <li key={index}>
              <input
                type={"checkbox"}
                checked={todo.completed}
                onClick={() => handleCheck(index)}
              />
              {todo.text}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Todos;
