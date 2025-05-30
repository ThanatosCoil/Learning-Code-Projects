import { useState } from "react";

import { data } from "../../data";

const UserChallenge = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    name &&
      setUsers([
        ...users,
        {
          id: Object.keys(users).length + 1,
          name: name,
        },
      ]);
    setName("");
  }

  function removeUser(id) {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
    console.log(id);
    console.log(users.filter((user) => user.id !== id));
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <h4 style={{ fontWeight: "bold" }}>Add New User:</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <div
        className="form"
        style={{
          display: "flex",
          flexFlow: "column",
        }}
      >
        <h2 style={{ color: "black", textAlign: "center" }}>Users</h2>
        {users.map((user) => {
          return (
            <div key={user.id} style={{ display: "flex", flexFlow: "column" }}>
              <h5 style={{ textAlign: "center" }}>{user.name}</h5>
              <button
                className="btn"
                style={{ marginBottom: "12px" }}
                value={user.id}
                onClick={() => removeUser(user.id)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserChallenge;
