import {AppHeader} from "@/components/layout/header";
import {AppNavBar} from "@/components/layout/Aside";
import {AppShell, Stack} from "@mantine/core";
import {ChatBody} from "@/components/displayMessages/chatBody";
import {MessageForm} from "@/components/messageForm/messageForm";
import React from "react";

export function ChatPage(){
    return (
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
    )
}