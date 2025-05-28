import { useSelector } from "react-redux";
import { useDeleteProductMutation } from "../service/apiData";

const DeleteProduct = () => {
  const count = useSelector((state) => state.counter.value);
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();

  if (error) {
    return <h1 style={{ color: "red" }}>ERROR!!!</h1>;
  }

  if (isLoading) {
    return <h1 style={{ color: "blue" }}>Loading...</h1>;
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(count);
    } catch (err) {
      console.log("Error while deleting", err);
    }
  };

  return (
    <div
      style={{ marginTop: "2rem", border: "2px solid red", padding: "1rem" }}
    >
      <h1>{data?.title ? `${data.title} succesfully deleted` : ""}</h1>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete Product
      </button>
    </div>
  );
};
export default DeleteProduct;
