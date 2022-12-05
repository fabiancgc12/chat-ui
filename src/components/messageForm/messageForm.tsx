import {socket} from "@/hooks/useStartSocket";
import {useState} from "react";
import {useAtom, useSetAtom} from "jotai";
import {messagesAtom} from "@/global/messages.atom";

export function MessageForm(){
    const setChat = useSetAtom(messagesAtom)
    const [message,setMessage] = useState("")
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newMessage = {
            message,
            user:socket.id
        }
        socket.emit('message', message)
        setMessage("")
        setChat(chat => [...chat,newMessage])
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button type="submit">Send</button>
        </form>
    )
}