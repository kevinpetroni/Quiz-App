import { Tabs,  TabList, Tab, TabIndicator, TabPanels, TabPanel, Flex, ChakraProvider} from "@chakra-ui/react"
import Conteudo from "../Conteudo/conteudo"


const Pergunta = () => {
    return (
        <>
        <ChakraProvider >
       <Flex 
            as="form"
            width="100%"
            bg="gray.50"
            maxWidth={700}
            p={['6', '8']}
            mx={['4', 'auto']}
            flexDir="column"
            > 
        <Tabs position="relative" variant="unstyled" bg="pink.100" borderRadius={7}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Dois</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <Conteudo />
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Flex>
      </ChakraProvider>
      </>
    )
}

export default Pergunta