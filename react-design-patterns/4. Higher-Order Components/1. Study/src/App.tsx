import { useState } from "react";
import { useEffect } from "react";
import MyComponent from "./components/MyComponent";
import { withLoading } from "./utils/withLoading";
import { withTodo } from "./utils/withTodo";
import ToDoList from "./components/ToDoList";

const MyComponentWithLoading = withLoading(MyComponent);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData("Data Fetched");
      setIsLoading(false);
    }, 2000);
  }, []);

  //-----------------------------------------------------

  const TodoListWrapper = withTodo(ToDoList, "3");

  return (
    <>
      <MyComponentWithLoading isLoading={isLoading} data={data} />
      <hr />
      <br />
      <TodoListWrapper />
    </>
  );
};
export default App;
