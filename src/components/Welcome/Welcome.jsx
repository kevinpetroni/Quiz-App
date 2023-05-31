import { useContext } from "react"
import { QuizContext } from "../../context/quiz"


const Welcome = () => {
    const [dispatch] = useContext(QuizContext)
    return (
        <div id="Welcome">
            <h2>Seja bem-vindo </h2>
            <p>Clique para começar:</p>
            <button  onClick={() => dispatch({type: "CHANGE_STATE"})}>
                Iniciar
            </button>
        </div>
    )
}

export default Welcome