import "../App.css";
import { useState } from "react";
import { setAppState, setAnsweredQuestions } from "../actions";
import { useDispatch } from "react-redux";

function SectionOne() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [target, setTarget] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      prompt: "Is your business model B2C or B2B or both?",
      choices: [
        { option: "B2C", targetQuestionId: [3] },
        { option: "B2B", targetQuestionId: [2] },
        { option: "both", targetQuestionId: [2, 3] },
      ],
    },
    {
      id: 2,
      prompt: "Do you target all age brackets?",
      choices: [
        { option: "yes", targetQuestionId: [] },
        { option: "no", targetQuestionId: [] },
      ],
    },
    {
      id: 3,
      prompt: "Do you target all industries?",
      choices: [
        { option: "yes", targetQuestionId: [] },
        { option: "no", targetQuestionId: [] },
      ],
    },
  ]);

  const dispatch = useDispatch();

  const nextQuestion = (targetQuestionId) => {
    if (currentQuestion === questions.length - 1) {
      dispatch(setAppState("sectionTwo"));
    } else {
      if (targetQuestionId.length !== 0) {
        let result = questions.filter((question) =>
          targetQuestionId.some((o2) => question.id === o2)
        );
        setQuestions(result);
      }
      if (target) {
        setCurrentQuestion(currentQuestion + 1);
      }
      setTarget(true);
    }
  };

  return (
    questions.length !== 0 && (
      <div className="app">
        <h1>{questions[currentQuestion].prompt}</h1>
        <div className="questions">
          {questions[currentQuestion].choices.map((choice, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  nextQuestion(choice.targetQuestionId);
                  // dispatch action answered questions
                  // copy the question add key called answer with the answer
                  // then disptach this to to redux
                  let q = { ...questions[currentQuestion] };
                  q.answer = choice.option;
                  dispatch(setAnsweredQuestions(q));
                }}
              >
                {choice.option}
              </button>
            );
          })}
        </div>
      </div>
    )
  );
}

export default SectionOne;
