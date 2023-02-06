import { render, screen, cleanup } from "@testing-library/react";

import Todos from "../components/Todos";

afterEach(cleanup);
describe(Todos, () => {
  const todos = [
    { text: "Finish React TD", completed: false },
    { text: "Finish Spring TD", completed: false },
    { text: "Learn ML", completed: false },
  ];

  it("should have an empty list when rendered", () => {
    render(<Todos />);
    const todoList = screen.getByTestId("todo-list");
    const length = todoList.children.length;
    expect(length).toBe(0);
  });

  it("should render a list with todos if already added", () => {
    render(<Todos />);
    const todoList = screen.getByTestId("todo-list");
    todos.map(
      (todo, index) =>
        (todoList.innerHTML += `
            <li key={${index}}>
                <input
                    type={"checkbox"}
                    checked={${todo.completed}}
                    onClick={() => handleCheck(${index})}
                />
                {${todo.text}}
            </li>
        `)
    );
    const length = todoList.children.length;
    expect(length).toBe(3);
  });
});
