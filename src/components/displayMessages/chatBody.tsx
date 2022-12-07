import React, {useEffect, useLayoutEffect, useRef} from "react";
import {useAtom} from "jotai";
import {messagesAtom} from "@/global/messages.atom";
import {Message} from "@/components/displayMessages/message";
import {Container, Stack} from "@mantine/core";
import {useWindowScroll} from "@mantine/hooks";

export function ChatBody(){
    const [chat,setChat] = useAtom(messagesAtom)
    const ref = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        document.body.scrollIntoView({behavior: 'smooth',block: "end", inline: "nearest"})
    },[chat])
    return (
        <Stack ref={ref} align="flex-start" justify="flex-start" px={"xl"} w={500} mx={"auto"}>
            {chat.map((msg,i) => {
                return <Message key={`user-${msg.user}-${i}`} msg={msg}/>
            })}
        </Stack>
    )
}