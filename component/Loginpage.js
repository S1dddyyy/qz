import React, { useContext, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import data from "../users.json";
import { AuthContext } from "../context/AuthContext";
export default function Loginpage() {
  const [redirect, setRedirect] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    let username = event.target.user.value;
    let password = event.target.password.value;

    console.log(username);

    for (let i = 0; i < data.userdetails.length; i++) {
      if (
        data.userdetails[i].username == username &&
        data.userdetails[i].password == password
      ) {
        let users = JSON.parse(localStorage.getItem("users"));
        users = { userid: "username" };
        localStorage.setItem("users", JSON.stringify(users));
        setRedirect(true);
        setAuth(true);
      } else {
        setRedirect(false);
        setAuth(false);
      }
    }
  };

  return (
    <div>
      {redirect ? (
        <>
          <Redirect to="/startgame" />
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            UserName:
            <input type="text" name="user" />
            <br />
            Password
            <input type="password" name="password" />
            <br />
            <input type="submit" />
          </form>
          <div>Not Authenticated</div>
        </>
      )}
    </div>
  );
}
