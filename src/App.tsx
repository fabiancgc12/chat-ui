import React from 'react'
import {Flex, MantineProvider} from '@mantine/core'
import {useStartSocket} from "@/hooks/useStartSocket";
import {MessageForm} from "@/components/messageForm/messageForm";
import {DisplayMessages} from "@/components/displayMessages/displayMessages";

function App() {
    useStartSocket()
    return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <Flex
              mih={100}
              gap="xs"
              justify="space-between"
              align="flex-start"
              direction="column"
              wrap="wrap"
          >
              <DisplayMessages/>
              <MessageForm/>
          </Flex>
      </MantineProvider>
  )
}

export default App
