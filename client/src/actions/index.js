export const setUserName = (userName) => {
  return {
    type: "setUserName",
    payload: userName,
  };
};

export const setAppState = (state) => {
  return {
    type: "setAppState",
    payload: state,
  };
};

export const setAnsweredQuestions = (question) => {
  return {
    type: "setAnsweredQuestions",
    payload: question,
  };
};

export const reset = () => {
  return {
    type: "reset",
  };
};
