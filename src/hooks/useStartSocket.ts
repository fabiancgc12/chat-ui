import {useEffect, useState} from "react";
import io from "socket.io-client";
import {MessageType} from "@/utils/types/Message.type";
import {useSetAtom} from "jotai";
import {messagesAtom} from "@/global/messages.atom";

const SERVER = "http://localhost:8000"
export const socket = io(SERVER);

export function useStartSocket(){
    const [isConnected, setIsConnected] = useState(socket.connected);
    const setChat = useSetAtom(messagesAtom)
    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on("message",(msg:MessageType) => {
            setChat(chat => [...chat,msg])
        })

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('message');
        };
    }, []);

}