import { useGetAllProductsQuery } from "../service/apiData";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  if (isError) {
    return <h1 style={{ color: "red" }}>ERROR!!!</h1>;
  }

  if (isLoading) {
    return <h1 style={{ color: "blue" }}>Loading...</h1>;
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      {data?.products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};
export default AllProducts;
