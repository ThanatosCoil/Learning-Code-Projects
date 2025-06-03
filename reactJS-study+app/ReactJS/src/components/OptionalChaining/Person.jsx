import avatar from "/src/assets/react.svg";

function Person({ name, nickName, images }) {
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img
        src={img}
        alt={name}
        style={{ width: "50px", borderRadius: "30px" }}
      />
      <h2 style={{ color: "black" }}>{name}</h2>
      <p> {nickName ? `Nickname: ${nickName}` : null} </p>
    </div>
  );
}
export default Person;
