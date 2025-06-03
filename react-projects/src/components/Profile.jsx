import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({ name: "name", age: 0 });
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="name"
      />
      <input
        type="number"
        value={age}
        onChange={handleAgeChange}
        placeholder="age"
      />
      <h1>Your name: {name}</h1>
      <h1>Your age: {age}</h1>
    </div>
  );
};
export default Profile;
