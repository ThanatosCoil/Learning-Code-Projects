import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  if (res.status !== 200) {
    throw new Error(`Error fetching data: ${res.statusText}`);
  }
  return res.data;
};

const StaleTime = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchData,
    staleTime: 5000,
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
export default StaleTime;
