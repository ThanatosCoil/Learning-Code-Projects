import { useState } from "react";
import Navlinks from "./Navlinks";

const DrillNavbar = () => {
  const [user, setUser] = useState({ name: "Bob" });

  const logout = () => {
    setUser(null);
  };
  const login = () => {
    setUser({ name: "Bob" });
  };

  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <Navlinks user={user} logout={logout} login={login} />
    </nav>
  );
};

export default DrillNavbar;
