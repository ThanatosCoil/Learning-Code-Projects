import { useState } from "react";

const ShoppingList = () => {
  const [list, setList] = useState([
    { name: "Apple", quantity: 2 },
    { name: "Banana", quantity: 5 },
    { name: "Orange", quantity: 10 },
  ]);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const newTask = { name, quantity };

  const handleClick = () => {
    setList([...list, newTask]);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <h1>Name:{name}</h1>
      <h1>Quantity:{quantity}</h1>
      <button onClick={handleClick}>add</button>
      <h1>
        List of items:{" "}
        {list.map((l) => (
          <p>
            Name:{l.name} <br />
            Quantity:{l.quantity}
          </p>
        ))}
      </h1>
    </div>
  );
};
export default ShoppingList;
