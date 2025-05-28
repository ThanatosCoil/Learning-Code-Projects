import { useGetSingleProductQuery } from "../service/apiData";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  const count = useSelector((state) => state.counter.value);
  const { data, isError, isLoading } = useGetSingleProductQuery(count);

  if (isError) {
    return <h1 style={{ color: "red" }}>ERROR!!!</h1>;
  }

  if (isLoading) {
    return <h1 style={{ color: "blue" }}>Loading...</h1>;
  }

  return (
    <div>
      <h1 style={{ color: "green" }}>{data.title}</h1>
      <p style={{ color: "orange" }}>{data.description}</p>
    </div>
  );
};
export default SingleProduct;
