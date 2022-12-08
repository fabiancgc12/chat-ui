import React from 'react'
import {AppShell, Flex, MantineProvider, Stack} from '@mantine/core'
import {useStartSocket} from "@/hooks/useStartSocket";
import {MessageForm} from "@/components/messageForm/messageForm";
import {ChatBody} from "@/components/displayMessages/chatBody";
import {AppHeader} from "@/components/layout/header";
import {AppNavBar} from "@/components/layout/Aside";

function App() {
    useStartSocket()
    return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <AppShell
            asideOffsetBreakpoint="sm"
            navbar={<AppHeader/>}
            aside={<AppNavBar/>}
          >
              <Stack justify="space-between" mih={"100vh"}>
                  <ChatBody/>
                  <MessageForm/>
              </Stack>
          </AppShell>

      </MantineProvider>
  )
}

export default App
