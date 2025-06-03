import axios from "axios";
import TodoList from "./components/Details/TodoList";
import DataSource from "./components/shared/DataSource";
import ProductList from "./components/Details/ProductList";

const getServerData = (url: string) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const App = () => {
  return (
    <>
      <DataSource
        getDataFunc={getServerData(
          "https://jsonplaceholder.typicode.com/todos/12"
        )}
        resourceName="todo"
      >
        <TodoList />
      </DataSource>

      <hr />
      <br />
      <DataSource
        getDataFunc={getServerData("https://fakestoreapi.com/products")}
        resourceName="products"
      >
        <ProductList />
      </DataSource>
    </>
  );
};

export default App;
