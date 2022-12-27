import React, {useEffect, useState} from "react";
import {useAtom, useSetAtom} from "jotai";
import {messagesAtom} from "@/global/messages.atom";
import {Button, Container, Flex, TextInput,Text} from "@mantine/core";
import {MessageModel} from "../../../../chat-server/src/common/models/MessageModel";
import {useSocket} from "@/global/socketContext";
import {whoIsTypingAtom} from "@/global/isTyping.atom";

export function MessageForm(){
    const socket = useSocket()
    const setChat = useSetAtom(messagesAtom)
    const [message,setMessage] = useState("")
    const isTyping = message.length > 0
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message.trim().length == 0 ) return
        const newMessage = new MessageModel(message,socket.id)
        socket.emit('message', message)
        setMessage("")
        setChat(chat => [...chat,newMessage])
    }

    useEffect(() => {
        if (message.length > 0)
            socket.emit('isTyping')
        else
            socket.emit('stopTyping')
    },[isTyping])

    return (
        <Container p={5} w={500}>
            <WhoIsTyPing/>
            <form onSubmit={onSubmit}>
                <Flex align={"center"} gap={"sm"}>
                    <TextInput
                        // onKeyPress={startTyping}
                        // onBlur={stopTyping}
                        placeholder={"Start typing..."}
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        w={"100%"}
                    />
                    <Button type="submit">Send</Button>
                </Flex>
            </form>
        </Container>
    )
}

function WhoIsTyPing(){
    const [whoIsTyping] = useAtom(whoIsTypingAtom)
    console.log(whoIsTyping)
    if (whoIsTyping.size == 0) return null
    const [first,second,...rest] = whoIsTyping
    let msg = `${first} is typing...`
    if (second)
        msg = `${first} and ${second} are typing...`
    if (whoIsTyping.size > 2)
        msg = `${first}, ${second} and more are typing...`
    return (
        <div>
            <Text fz={"xs"}>{msg}</Text>
        </div>
    )
}