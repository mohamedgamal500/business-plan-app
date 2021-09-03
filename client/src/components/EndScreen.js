import React from "react";
import "../App.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { setAppState, setUserName, reset } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { addPlan } from "../api";
import { useState } from "react";

const EndScreen = () => {
  const dispatch = useDispatch();
  const { userName, answeredQuestions } = useSelector((state) => state);
  const [submited, setSubmited] = useState(false);
  const MySwal = withReactContent(Swal);

  let answers = [];
  const savePlan = () => {
    addPlan({ CompanyName: userName, answers }).then(() => {
      MySwal.fire({
        icon: "success",
        text: "Your answers are submitted successfully.",
      });
      setSubmited(true);
    });
  };

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
        answers.push({ questionId: question.id, answer: question.answer });
        return (
          <div key={index}>
            <h1>{question.prompt}</h1>
            <p>{question.answer}</p>
          </div>
        );
      })}
      <button disabled={submited} onClick={savePlan}>
        Submit
      </button>
      <button onClick={restartApp}>Restart Plan</button>
    </div>
  );
};

export default EndScreen;
