import { createContext, useReducer } from "react";
import questions from '../data/question'

const Stages = ["Start", "Playing", "End"]

const initialState = {
  gameStage: Stages[0],
  questions
}

const quizReducer = (state, action) => {
console.log(state, action)
  switch(action.type) {
  case "CHANGE_STATE": 
    return {
      gameStage: Stages[1],
    };
  default: 
    return state;
}

}
export const QuizContext = createContext()
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};