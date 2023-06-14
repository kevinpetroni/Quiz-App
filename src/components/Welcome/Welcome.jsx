import { ChakraProvider, FormControl, Heading, Button, Box, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, 
    useDisclosure, 
    Divider, VStack, HStack, Image, Flex } from "@chakra-ui/react"



const Welcome = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <ChakraProvider >
            <FormControl  maxHeight={1000}>
                <Box bgGradient="linear(to-r, cyan.400, purple.400, pink.400)" h="100vh">
            <Heading textAlign="center">Seja bem vindo ao Quiz KA</Heading>
            <VStack justify="center" mt={5} align="center"  p={['6', '8']}>
                <Image src='src/img/Problema.gif' alt='Computador com um ponto de interrogação' />
            <HStack>
                <VStack>
                <FormLabel>Escolha a categoria para começarmos:</FormLabel>
            <Button colorScheme='gray' variant='outline' onClick={onOpen}>
                Categorias
                </Button>
                </VStack>
                </HStack>
                </VStack>
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
                        <Button  colorScheme='pink' variant='outline' w={100}>HTML</Button>
                        <Button colorScheme='purple' variant='outline' w={100}>CSS</Button>
                        <Button colorScheme='cyan' variant='outline' w={100}>JavaScript</Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
            </FormControl>
      </ChakraProvider>
    )
}

export default Welcome