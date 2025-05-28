import { useSelector } from "react-redux";
import { useUpdateProductMutation } from "../service/apiData";

const UpdateProduct = () => {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();
  const count = useSelector((state) => state.counter.value);

  console.log(data);

  if (error) {
    return <h1 style={{ color: "red" }}>ERROR!!!</h1>;
  }

  if (isLoading) {
    return <h1 style={{ color: "blue" }}>Loading...</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Title updated",
      };

      await updateProduct({ id: count, updatedProduct: updatedProductData });
    } catch (err) {
      console.log("Error in updating", err);
    }
  };

  return (
    <div
      style={{ marginTop: "2rem", border: "2px solid purple", padding: "1rem" }}
    >
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};
export default UpdateProduct;
