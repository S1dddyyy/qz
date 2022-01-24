import React from "react";
import Baseroute from "../component/Baseroute";
import AuthContextProvider from "../context/AuthContext";
export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <Baseroute />
      </AuthContextProvider>
    </div>
  );
}

/**
 * 
 * 
Task title - Build a trivia game. 

A user will land on a page which contains a question and relevant choices. 
The user can log in using email password.

The user can either see his history or play a new game.
/quiz/:id

// /quiz/1

If user selects to play a game - 
The user will select a choice and click next. At the end of the quiz, a final score will be displayed.

If user sees his history -
He can see scores of his past games. (Only scores, nothing else required.)

Constraints

It is compulsory to answer each question.
They cannot change any of the previously answered question.


No of questions - 5
Open trivia api - https://opentdb.com/api_config.php
 * 
 */
