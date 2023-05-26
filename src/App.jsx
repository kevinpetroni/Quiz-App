import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Pergunta from './components/Tabs'

function App() {


  return (
    <>
      <div>
      <h1>Quiz App</h1>
      <ChakraProvider >
      <Pergunta />
      </ChakraProvider>
      </div>

    </>
  )
}

export default App
