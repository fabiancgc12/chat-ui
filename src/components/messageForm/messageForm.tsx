import React, {useState} from "react";
import {socket} from "@/hooks/useStartSocket";
import {useAtom, useSetAtom} from "jotai";
import {messagesAtom} from "@/global/messages.atom";
import {Box, Container} from "@mantine/core";
import {MessageModel} from "../../../../chat-server/src/utils/MessageModel";

export function MessageForm(){
    const setChat = useSetAtom(messagesAtom)
    const [message,setMessage] = useState("")
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message.trim().length == 0 ) return
        const newMessage = new MessageModel(message,socket.id)
        socket.emit('message', message)
        setMessage("")
        setChat(chat => [...chat,newMessage])
    }
    return (
        <Container p={5}>
            <form onSubmit={onSubmit}>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
        </Container>
    )
}