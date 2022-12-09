import React from "react";
import {Button, Flex, Header, Title} from "@mantine/core";
import {useSocket} from "@/global/socketContext";
import {useAtom, useSetAtom} from "jotai";
import {userAtom} from "@/global/user.atom";

export function AppHeader(){
    const socket = useSocket()
    const setUser = useSetAtom(userAtom)
    return (
        <Header height={70} p={"xs"} sx={{display:"flex",alignItems:"center"}}>
            <Flex align={"center"} justify={"space-between"} w={"100%"}>
                <Title order={2} size={"h2"} >Chatify</Title>
                <Button color="red" onClick={() => {
                    setUser(undefined)
                    socket.disconnect()
                }}>
                    LogOut
                </Button>
            </Flex>
        </Header>
    )
}