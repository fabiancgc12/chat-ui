import {AppHeader} from "@/components/layout/header";
import {AppNavBar} from "@/components/layout/Aside";
import {AppShell, Stack} from "@mantine/core";
import {ChatBody} from "@/components/displayMessages/chatBody";
import {MessageForm} from "@/components/messageForm/messageForm";
import React, {useState} from "react";
import {SocketProvider} from "@/global/socketContext";

export function ChatPage(){
    const [openNavBar,setOpenNavBar] = useState(true)
    return (
        <SocketProvider>
            <AppShell
                asideOffsetBreakpoint="sm"
                navbar={<AppHeader opened={openNavBar} setOpened={setOpenNavBar}/>}
                aside={<AppNavBar opened={openNavBar}/>}
            >
                <Stack justify="space-between" h={"100%"}>
                    <ChatBody/>
                    <MessageForm/>
                </Stack>
            </AppShell>
        </SocketProvider>

    )
}