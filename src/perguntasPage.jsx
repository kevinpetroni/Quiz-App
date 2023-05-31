import { ChakraProvider } from '@chakra-ui/react'
import Pergunta from './components/Tabs'

function question() {


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

export default question