import React from "react";
import {Burger, Button, Flex, Header, MediaQuery, Title} from "@mantine/core";
import {useSocket} from "@/global/socketContext";
import {useAtom, useSetAtom} from "jotai";
import {userAtom} from "@/global/user.atom";
import {RESET} from "jotai/utils";
import {usersAtom} from "@/global/users.atom";

type props = {
    opened:boolean,
    setOpened:React.Dispatch<React.SetStateAction<boolean>>
}

export function AppHeader({opened,setOpened}:props){
    const socket = useSocket()
    const setUser = useSetAtom(userAtom)
    const setUsersList = useSetAtom(usersAtom)
    return (
        <Header height={70} p={"xs"} sx={{display:"flex",alignItems:"center"}}>
            <Flex align={"center"} justify={"space-between"} w={"100%"}>
                <Title order={2} size={"h2"} >Chatify</Title>
                <div>
                    <Button color="red" onClick={() => {
                        setUser(RESET)
                        setUsersList([])
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