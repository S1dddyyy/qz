import React, { useEffect, useState } from "react";
import Report from "../component/Report";
export default function Playgame() {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [ans, setAns] = useState("correct");
  const [win, setWin] = useState(0);
  const [mark, setMark] = useState(false);

  useEffect(() => {
    const fun = () => {
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);

          setQuestions(data.results);
        });
    };
    fun();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    setAns(e.target.value);
  };

  const handleSubmit = () => {
    if (ans == "correct") {
      setWin(win + 1);
      console.log("Hurrah!!");
    }
    if (count == 4) {
      setMark(true);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <>
      {mark ? (
        <>
          <Report correct={win} total={5} />
        </>
      ) : (
        <>
          {questions.length == 0 ? (
            <>Loading...</>
          ) : (
            <>
              <label>
                {count + 1}. {questions[count].question}
                <br />
                <select value={ans} onChange={handleChange}>
                  <option value="correct">
                    {questions[count].correct_answer}
                  </option>
                  <option value="incorrect1">
                    {questions[count].incorrect_answers[0]}
                  </option>
                  <option value="incorrect2">
                    {questions[count].incorrect_answers[1]}
                  </option>
                  <option value="incorrect3">
                    {questions[count].incorrect_answers[2]}
                  </option>
                </select>
              </label>
              <button onClick={() => handleSubmit()}> Next</button>
            </>
          )}
        </>
      )}
    </>
  );
}
