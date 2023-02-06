import { render, screen, cleanup } from "@testing-library/react";

import Dones from "../components/Dones";

afterEach(cleanup);
describe(Dones, () => {
  const dones = [
    { text: "Finish Spring TD", completed: true },
    { text: "Learn ML", completed: true },
  ];

  it("should render an empty done list at first", () => {
    render(<Dones />);
    const doneList = screen.getByTestId("done-list");
    expect(doneList.children.length).toBe(0);
  });

  it("should render a done list with two todos", () => {
    render(<Dones doneList={dones} />);
    const doneList = screen.getByTestId("done-list");
    expect(doneList.children.length).toBe(2);
  });
});
