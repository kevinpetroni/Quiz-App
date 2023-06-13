import { ChakraProvider, FormControl, Heading, Button, Box, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Divider, VStack, HStack } from "@chakra-ui/react"



const Welcome = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <ChakraProvider >
            <FormControl  maxHeight={1000}>
                <Box bg="purple.200" h="100vh">
            <Heading textAlign="center">Seja bem vindo ao Quiz KA</Heading>
          
            <HStack mt={5} justifyContent="center">
                <VStack>
                <FormLabel>Escolha a categoria para começarmos:</FormLabel>
            <Button colorScheme='teal' variant='outline' onClick={onOpen}>
                Categorias
                </Button>
                </VStack>
                </HStack>
                
                </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Categorias 📚</ModalHeader>
                    <Divider />
                    <ModalCloseButton />
                    <ModalBody >
                    <FormLabel textAlign="center">Escolha uma Categoria</FormLabel>
                        <VStack spacing={4} mt={4}>
                        <Button w={100}>HTML</Button>
                        <Button w={100}>CSS</Button>
                        <Button w={100}>JavaScript</Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
                
               
            </FormControl>
      {/* <Pergunta /> */}
      </ChakraProvider>
    )
}

export default Welcome