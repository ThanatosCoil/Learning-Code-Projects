import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const fetchTodos = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  if (res.status !== 200) {
    throw new Error(`Error fetching todos: ${res.statusText}`);
  }
  return res.data;
};

const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  if (res.status !== 200) {
    throw new Error(`Error fetching posts: ${res.statusText}`);
  }
  return res.data;
};

const FetchFromMultipleEndpoints = () => {
  const [currentTodoId, setCurrentTodoId] = useState(1);
  const [currentPostId, setCurrentPostId] = useState(1);
  const results = useQueries({
    queries: [
      { queryKey: ["todos"], queryFn: fetchTodos },
      { queryKey: ["posts"], queryFn: fetchPosts },
    ],
  });

  const [todosQuery, postsQuery] = results;

  if (todosQuery.isLoading || postsQuery.isLoading)
    return <div>Loading...</div>;
  if (todosQuery.error || postsQuery.error)
    return (
      <div>
        Error fetching data: {todosQuery.error?.message} ||{" "}
        {postsQuery.error?.message}
      </div>
    );

  const todosData = todosQuery.data;
  const postsData = postsQuery.data;
  return (
    <div>
      <h3>Todos</h3>
      <pre>
        {JSON.stringify(
          todosData.find((todo: any) => todo.id === currentTodoId)
        )}
      </pre>
      <button
        className="bg-blue-400 text-white px-1 py-1 rounded-md hover:cursor-pointer"
        onClick={() => setCurrentTodoId((prev) => (prev < 200 ? prev + 1 : 1))}
      >
        Next
      </button>
      <h3>Posts</h3>
      <pre>
        {JSON.stringify(
          postsData.find((post: any) => post.id === currentPostId)
        )}
      </pre>
      <button
        className="bg-blue-400 text-white px-1 py-1 rounded-md hover:cursor-pointer"
        onClick={() => setCurrentPostId((prev) => (prev < 100 ? prev + 1 : 1))}
      >
        Next
      </button>
    </div>
  );
};
export default FetchFromMultipleEndpoints;
