import React, { useEffect, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <>
      {auth == false ? (
        <>
          <Redirect to="/" />
        </>
      ) : (
        <>
          <Link to="/quiz">
            <button type="button">PlayNewGame</button>
          </Link>
          <Link to="/history">
            <button type="button">Check history</button>
          </Link>
        </>
      )}
      {/* required some change */}
    </>
  );
}
