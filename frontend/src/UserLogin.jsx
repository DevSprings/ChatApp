/**
 * userLogin.jsx
 * -------------
 * Handles user login form and authentication.
 *
 * Props:
 * - setUser: Function to set the current user in the parent component.
 *
 * Features:
 * - Renders a login form for username input.
 * - Stores the username in localStorage on successful login.
 * - Calls setUser to update the app state.
 * - Provides basic validation for empty username.
 *
 */

import { useState } from "react";

const UserLogin = ({ setUser }) => {
  const [userName, setUserName] = useState();
  const handleUser = () => {
    if (!userName) return;
    localStorage.setItem("user", userName);
    setUser(userName);
  };
  return (
    <div>
      <div className="login__container">
        <h1 className="login__title">Chat App</h1>
        <div className="login__form">
          <input
            className="login_input"
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleUser}>Login</button>
        </div>
      </div>
    </div>
  );
};
export default UserLogin;

