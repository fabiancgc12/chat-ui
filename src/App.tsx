import React from 'react'
import {Flex, MantineProvider, Stack} from '@mantine/core'
import {useStartSocket} from "@/hooks/useStartSocket";
import {MessageForm} from "@/components/messageForm/messageForm";
import {ChatBody} from "@/components/displayMessages/chatBody";

function App() {
    useStartSocket()
    return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <Stack justify="space-between" mih={"100vh"}>
              <ChatBody/>
              <MessageForm/>
          </Stack>
      </MantineProvider>
  )
}

export default App
