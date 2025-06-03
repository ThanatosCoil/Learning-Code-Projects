import { render, screen, waitFor } from "@testing-library/react";
import TodoList from "../../src/components/TodoList";
import userEvent from "@testing-library/user-event";

describe("TodoList", () => {
  it("should render the todo list with an input and a button", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Add a new todo")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Todo" })
    ).toBeInTheDocument();
  });

  it("should add a new todo when the button is clicked", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByRole("button", { name: "Add Todo" });
    await userEvent.type(input, "New Todo");
    await userEvent.click(button);
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  it("should toggle a todo when the checkbox is clicked", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByRole("button", { name: "Add Todo" });
    await userEvent.type(input, "New Todo");
    await userEvent.click(button);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(screen.getByText("New Todo")).toHaveStyle(
      "text-decoration: line-through"
    );
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(screen.getByText("New Todo")).toHaveStyle("text-decoration: none");
  });

  it("should delete a todo when the delete button is clicked", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByRole("button", { name: "Add Todo" });
    await userEvent.type(input, "New Todo");
    await userEvent.click(button);
    const deleteButton = screen.getByRole("button", { name: "Delete" });
    await userEvent.click(deleteButton);
    await waitFor(() => {
      expect(screen.queryByText("New Todo")).not.toBeInTheDocument();
    });
  });
});
