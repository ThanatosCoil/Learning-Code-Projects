import { useState } from "react";

const UserContainer = ({ user, logout, login }) => {
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
