import useFetch from "./useFetch";
const url = "https://api.github.com/users/QuincyLarson";

const FetchData = () => {
  const { isLoading, isError, data } = useFetch(url);
  console.log(data);

  if (isLoading) {
    return <h2 style={{ color: "black" }}>Loading...</h2>;
  }
  if (isError) {
    return <h2 style={{ color: "black" }}>There was an error...</h2>;
  }
  const { avatar_url, name, company, bio } = data;
  return (
    <div>
      <img
        style={{ width: "100px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2 style={{ color: "black" }}>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default FetchData;
