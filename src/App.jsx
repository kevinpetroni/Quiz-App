import { useContext } from "react"
import { QuizContext } from "./context/quiz"
import Welcome from "./components/Welcome/Welcome"
import Pergunta from "./components/Tabs"



// import { QuizContext } from "../context/quiz"
function App() {
  const [quizState] = useContext(QuizContext)

  return (
    <>
      <div>
      <h1>Quiz App</h1>
     {quizState.gameStage === "Start" && <Welcome />}
     {quizState.gameStage === "Playing" &&  <Pergunta />}
      </div>

    </>
  )
}

export default App