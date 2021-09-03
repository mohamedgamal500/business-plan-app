import "../App.css";
import { useState } from "react";
import { setAppState, setAnsweredQuestions } from "../actions";
import { useDispatch } from "react-redux";

function SectionTwo() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [investmentNumber, setInvestmentNumber] = useState(0);

  const [questions, setQuestions] = useState([
    {
      id: 4,
      prompt: "Did you have an investment?",
      choices: [
        { option: "yes", targetQuestionId: [] },
        { option: "no", targetQuestionId: [] },
      ],
    },
    {
      id: 5,
      prompt: "How much was the investment?",
      choices: [],
    },
  ]);

  const dispatch = useDispatch();

  const  finishApp = () => {
    dispatch(setAppState("finished"));
  };

  return (
    questions.length !== 0 && (
      <div className="app">
        <h1>{questions[currentQuestion].prompt}</h1>
        <div className="questions">
          {questions[currentQuestion].choices.length !== 0 ? (
            questions[currentQuestion].choices.map((choice, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentQuestion(currentQuestion + 1);
                    setAnswer(choice.option);
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
            })
          ) : (
            <>
              <input
                id="investmentNumber"
                disabled={answer === "yes" ? false : true}
                type="number"
                min="1"
                value={investmentNumber}
                onChange={(event) => {
                  setInvestmentNumber(event.target.value);
                }}
              />{" "}
              <span>$</span>
            </>
          )}
        </div>
        {currentQuestion === questions.length - 1 && (
          <>
            <button
              disabled={answer === "yes" && investmentNumber === 0}
              onClick={() => {
                let q = { ...questions[currentQuestion] };
                q.answer = `${investmentNumber} $`;
                dispatch(setAnsweredQuestions(q));
                finishApp();
              }}
              id="nextQuestion"
            >
              Next
            </button>
          </>
        )}
      </div>
    )
  );
}

export default SectionTwo;
