import Welcome from "./components/Welcome/Welcome"
import { ChakraProvider } from "@chakra-ui/react"

function App() {

  return (
    
  <ChakraProvider>
    <Welcome />
  </ChakraProvider>
 

  )
}

export default App