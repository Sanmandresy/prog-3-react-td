import renderer from "react-test-renderer";
import TodoList from "../components/TodoList";

describe(TodoList, () => {
  it("should render the todo list component", () => {
    const component = renderer.create(<TodoList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
