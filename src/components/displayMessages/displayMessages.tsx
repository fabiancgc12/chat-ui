import React from "react";
import {useAtom} from "jotai";
import {messagesAtom} from "@/global/messages.atom";
import {Message} from "@/components/displayMessages/message";
import {Container, Stack} from "@mantine/core";

export function DisplayMessages(){
    const [chat,setChat] = useAtom(messagesAtom)
    return (
        <Stack align="flex-start" justify="flex-start" px={"xl"} w={500} mx={"auto"}>
            {chat.map((msg,i) => {
                return <Message key={`user-${msg.user}-${i}`} msg={msg}/>
            })}
        </Stack>
    )
}