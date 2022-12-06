import React from 'react'
import {Flex, MantineProvider, Stack} from '@mantine/core'
import {useStartSocket} from "@/hooks/useStartSocket";
import {MessageForm} from "@/components/messageForm/messageForm";
import {DisplayMessages} from "@/components/displayMessages/displayMessages";

function App() {
    useStartSocket()
    return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <Stack justify="flex-start">
              <DisplayMessages/>
              <MessageForm/>
          </Stack>
      </MantineProvider>
  )
}

export default App
