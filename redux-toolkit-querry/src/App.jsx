import AddNewProduct from "./app/components/AddNewProduct";
import AllProducts from "./app/components/AllProducts";
import Counter from "./app/components/Counter";
import DeleteProduct from "./app/components/DeleteProduct";
import SingleProduct from "./app/components/SingleProduct";
import UpdateProduct from "./app/components/UpdateProduct";

const App = () => {
  return (
    <div>
      <Counter />
      <SingleProduct />
      <AddNewProduct />
      <UpdateProduct />
      <DeleteProduct />
      <AllProducts />
    </div>
  );
};
export default App;
