import { useState, useEffect } from "react";

interface Todo {
  date: string;
}

const WithoutUseHook = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://date.jsontest.com");
        const data: Todo = await res.json();
        setTodo(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) <h1>Loading...</h1>;

  return (
    <div>
      <h1>{todo?.date}</h1>
    </div>
  );
};

export default WithoutUseHook;
