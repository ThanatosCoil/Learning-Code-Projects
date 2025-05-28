import React, { useEffect, useState, ReactNode } from "react";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface SingleTodoLoaderProps {
  children: ReactNode;
  todoId: number;
}

interface ChildComponentProps {
  todos: Todo | null;
}

const SingleTodoLoader = ({ todoId, children }: SingleTodoLoaderProps) => {
  const [todos, setTodos] = useState<Todo | null>(null);
  console.log(todoId);

  useEffect(() => {
    (async () => {
      const response = await axios.get<Todo>(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );
      setTodos(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<ChildComponentProps>(child)) {
          return React.cloneElement(child, {
            todos,
          });
        }
        return child;
      })}
    </>
  );
};

export default SingleTodoLoader;
