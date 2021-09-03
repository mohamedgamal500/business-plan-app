// ** Initial State
const initialState = {
  appState: "start",
  userName: "",
  answeredQuestions: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setAppState":
      return { ...state, appState: action.payload };
    case "setUserName":
      return { ...state, userName: action.payload };
    case "setAnsweredQuestions":
      return {
        ...state,
        answeredQuestions: [...state.answeredQuestions, action.payload],
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default appReducer;
