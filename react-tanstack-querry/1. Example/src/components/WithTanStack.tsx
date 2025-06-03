import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// const fetchData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   if (!res.ok) {
//     throw new Error("Error fetching data");
//   }
//   return res.json();
// };

const fetchData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return res.data;
};

const WithTanStack = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default WithTanStack;
