type Basic = {
  type: "basic";
  name: string;
};

type Advanced = {
  type: "advanced";
  name: string;
  email: string;
};

type Card = Basic | Advanced;

function Component(props: Card) {
  const { name, type } = props; // Не можем тут емаил, потому что если будет тип basic, то email не будет, а мы все равно будем приравнять его к какому то типу
  const alertType = type === "basic" ? "success" : "danger";
  const className = `alert alert-${alertType}`;
  if (type === "basic") {
    return (
      <article className={className}>
        <h2>User: {name}</h2>
      </article>
    );
  } else {
    // Здесь уже email возможен к существованию и его можно развернуть
    return (
      <article className={className}>
        <h2>User: {name}</h2>
        {props.email && <h2>Email: {props.email}</h2>}
      </article>
    );
  }
}

export default Component;
