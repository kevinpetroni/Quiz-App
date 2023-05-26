import { Tabs,  TabList, Tab, TabIndicator, TabPanels, TabPanel} from "@chakra-ui/react"

const Pergunta = () => {
    return (
        <>
        <Tabs position="relative" variant="unstyled" bg="red">
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
          </TabPanel>
        </TabPanels>
      </Tabs>
      </>
    )
}

export default Pergunta