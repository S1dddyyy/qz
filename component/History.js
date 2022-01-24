import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Redirect } from "react-router-dom";

export default function History() {
  const [data, setData] = useState([]);
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    let winnerdata = JSON.parse(localStorage.getItem("winnersdata"));
    console.log(winnerdata);
    setData(winnerdata);
  }, []);
  return (
    <>
      {auth == false ? (
        <>
          <Redirect to="/" />
        </>
      ) : (
        <>
          {data.length == 0 ? (
            <>Loading...</>
          ) : (
            <>
              Quiz History:
              <br />
              {data.map((win, key) => {
                return (
                  <>
                    {key + 1}th Game: {win.win} Total Correct
                    <br />
                  </>
                );
              })}
            </>
          )}
        </>
      )}
    </>
  );
}
