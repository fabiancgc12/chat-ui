import React from "react";
import {Burger, Button, Flex, Header, MediaQuery, Title} from "@mantine/core";
import {useSocket} from "@/global/socketContext";
import {useAtom, useSetAtom} from "jotai";
import {userAtom} from "@/global/user.atom";
import {RESET} from "jotai/utils";
import {usersAtom} from "@/global/users.atom";
import {whoIsTypingAtom} from "@/global/isTyping.atom";
import {messagesAtom} from "@/global/messages.atom";

type props = {
    opened:boolean,
    setOpened:React.Dispatch<React.SetStateAction<boolean>>
}

export function AppHeader({opened,setOpened}:props){
    const socket = useSocket()
    const setUser = useSetAtom(userAtom)
    const setMessages = useSetAtom(messagesAtom)
    const setUsersList = useSetAtom(usersAtom)
    const setWhoIsTyping = useSetAtom(whoIsTypingAtom)
    return (
        <Header height={70} p={"xs"} sx={{display:"flex",alignItems:"center"}}>
            <Flex align={"center"} justify={"space-between"} w={"100%"}>
                <Title order={2} size={"h2"} >Chatify</Title>
                <div>
                    <Button color="red" onClick={() => {
                        setMessages([])
                        setUser(RESET)
                        setUsersList([])
                        setWhoIsTyping(new Set([]))
                        socket.disconnect()
                    }}>
                        LogOut
                    </Button>
                    <MediaQuery largerThan="sm" styles={{ display: 'none'}}>
                        <Burger
                            opened={!opened}
                            onClick={() => setOpened((o) => !o)}
                            size="sm"
                            c={"gray.3"}
                            ml="md"
                        />
                    </MediaQuery>
                </div>

            </Flex>
        </Header>
    )
}