import { Box, Button, Text, VStack } from "@chakra-ui/react"

const Conteudo = () => {

    return (
        <>
       <Text fontSize='2xl' textAlign="center">Qual tag cria um parágrafo?</Text>
      <Box mt={4}>
        <VStack>
        <Button w="100%" variant='outline'>Tetset</Button>
        <Button w="100%" variant='outline'>Tetset</Button>
        </VStack>
      </Box>
      </>
    )
}

export default Conteudo