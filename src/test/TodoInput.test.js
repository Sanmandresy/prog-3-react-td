import { render, fireEvent, cleanup } from "@testing-library/react";

import TodoInput from "../components/TodoInput";

afterEach(cleanup);
describe(TodoInput, () => {
  it("should have a blank value when rendered", () => {
    const { getByTestId } = render(<TodoInput />);
    const initialInputValue = getByTestId("input_todo").value;
    expect(initialInputValue).toEqual("");
  });

  it("should change the input value when writing", () => {
    const { getByTestId } = render(<TodoInput />);
    const input = getByTestId("input_todo");
    fireEvent.change(input, { target: { value: "todo" } });
    expect(input.value).toBe("todo");
  });
});
