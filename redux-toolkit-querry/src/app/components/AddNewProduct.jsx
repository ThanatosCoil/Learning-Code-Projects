import { useAddNewProductMutation } from "../service/apiData";

const AddNewProduct = () => {
  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();

  if (error) {
    return <h1 style={{ color: "red" }}>ERROR!!!</h1>;
  }

  if (isLoading) {
    return <h1 style={{ color: "blue" }}>Loading...</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Bom bom bom",
        description: "Awesome book for sleeping Zzz...",
      };
      await addNewProduct(newProductData);
    } catch (err) {
      console.log("Failed to add new product", err);
    }
  };

  return (
    <div style={{ border: "2px solid black", padding: "1rem" }}>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};
export default AddNewProduct;
