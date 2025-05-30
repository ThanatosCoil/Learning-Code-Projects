import { useContext } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout, login } = useContext(NavbarContext);

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello! {user.name.toUpperCase()}</p>
          <button type="button" className="btn" value={user} onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <p>Please Login</p>
          <button type="button" className="btn" value={user} onClick={login}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default UserContainer;
