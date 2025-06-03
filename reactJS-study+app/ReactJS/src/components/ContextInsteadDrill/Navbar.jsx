import { useState, createContext } from "react";
import Navlinks from "./Navlinks";

export const NavbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: "Bob" });

  const logout = () => {
    setUser(null);
  };
  const login = () => {
    setUser({ name: "Bob" });
  };

  return (
    <NavbarContext.Provider value={{ user, logout, login }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <Navlinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
