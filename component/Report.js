import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Report(props) {
  useEffect(() => {
    let winnerdata = JSON.parse(localStorage.getItem("winnersdata"));
    if (winnerdata == null) {
      winnerdata = [{ win: props.correct }];
    } else {
      winnerdata.push({ win: props.correct });
    }
    console.log(winnerdata);

    localStorage.setItem("winnersdata", JSON.stringify(winnerdata));
  }, []);

  return (
    <>
      Thanks for the completion of the test
      <br />
      Your Total Correct Answer: {props.correct}
      <br />
      Your Total InCorrect Answer: {5 - props.correct}
      <br />
      <Link to="/history">
        <button type="button">History</button>
      </Link>
    </>
  );
}
