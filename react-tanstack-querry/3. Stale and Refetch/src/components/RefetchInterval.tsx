import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const fetchTodo = async (id: number) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  if (res.status !== 200) {
    throw new Error(`Error fetching data: ${res.statusText}`);
  }
  return res.data;
};

const RefetchInterval = () => {
  const [currentId, setCurrentId] = useState(1);
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo", currentId],
    queryFn: () => fetchTodo(currentId),
    refetchInterval: 5000,
  });

  // Для нагля
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId((prev) => (prev < 200 ? prev + 1 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h3>Todo</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button
        onClick={() => setCurrentId((prev) => (prev < 200 ? prev + 1 : 1))}
      >
        Next Todo
      </button>
    </div>
  );
};
export default RefetchInterval;
