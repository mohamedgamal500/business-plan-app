import React from "react";
import "../App.css";
import { setAppState, setUserName, reset } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const EndScreen = () => {
  const dispatch = useDispatch();
  const { userName, answeredQuestions } = useSelector((state) => state);

  const savePlan = () => {};

  const restartApp = () => {
    dispatch(setUserName(""));
    dispatch(reset());
    dispatch(setAppState("start"));
  };
  return (
    <div className="EndScreen">
      <h1>Company Name</h1>
      <h2 id="companyName">{userName}</h2>
      <h1>Your Plan</h1>
      {answeredQuestions.map((question, index) => {
        return (
          <div key={index}>
            <h1>{question.prompt}</h1>
            <p>{question.answer}</p>
          </div>
        );
      })}
      <button onClick={savePlan}>Submit</button>
      <button onClick={restartApp}>Restart Plan</button>
    </div>
  );
};

export default EndScreen;
