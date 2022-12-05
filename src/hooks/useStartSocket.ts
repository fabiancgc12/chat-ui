import {useEffect, useState} from "react";
import io from "socket.io-client";
import {MessageType} from "@/utils/types/Message.type";

const SERVER = "http://localhost:8000"
export const socket = io(SERVER);

export function useStartSocket(setChat: React.Dispatch<React.SetStateAction<MessageType[]>>){
    const [isConnected, setIsConnected] = useState(socket.connected);

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