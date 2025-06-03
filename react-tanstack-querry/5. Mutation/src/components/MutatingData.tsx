import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

const postTodo = async (todo: Todo) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    todo
  );
  if (response.status !== 201) {
    throw new Error(`Error fetching posts: ${response.statusText}`);
  }

  return response.data;
};

const MutatingData = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");

  const { mutate, error, status } = useMutation<Todo, Error, Todo>({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim() === "") return;
    mutate({ title, completed: false });
    setTitle("");
  };
  return (
    <div>
      <h1>Create new todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="bg-gray-200! text-slate-800! px-1 py-1 mr-1 rounded-md"
        />
        <button
          className="bg-blue-400! text-white px-1 py-1 rounded-md hover:cursor-pointer"
          type="submit"
        >
          {status === "pending" ? "Creating..." : "Create"}
        </button>
        {error && <p className="text-red-500">{error.message}</p>}
        {status === "success" && <p className="text-green-500">Todo created</p>}
      </form>
    </div>
  );
};
export default MutatingData;
