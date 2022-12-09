import React from 'react'
import { MantineProvider } from '@mantine/core'
import {useStartSocket} from "@/hooks/useStartSocket";
import {ChatPage} from "@/pages/ChatPage";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import {LoginPage} from "@/pages/Login";

function App() {
    useStartSocket()
    return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<ChatPage/>}/>
                  <Route path={"/login"} element={<LoginPage/>}/>
              </Routes>
          </BrowserRouter>

      </MantineProvider>
  )
}

export default App
