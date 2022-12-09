import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import io, {Socket} from "socket.io-client";
import {MessageModel} from "@/utils/models/MessageModel";
import {useSetAtom} from "jotai";
import {messagesAtom} from "@/global/messages.atom";
import { useNavigate } from "react-router-dom";

export const SERVER = "http://localhost:8000"

const Context = createContext(undefined as unknown as ReturnType<typeof io>)

type props = {
    children:ReactNode
}

export function SocketProvider({children}:props){
    const username = localStorage.getItem("username")
    const navigate = useNavigate();
    if (!username || username == "")
        navigate("/login")
    const socket = io(SERVER, {
        auth: {username}
    });
    useStartSocket(socket)
    return (
        <Context.Provider value={socket}>
            {username ? children : null}
        </Context.Provider>
    )
}

export function useStartSocket(socket:ReturnType<typeof io>){
    const [isConnected, setIsConnected] = useState(socket.connected);
    const setChat = useSetAtom(messagesAtom)
    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on("message",(msg:MessageModel) => {
            setChat(chat => [...chat,msg])
        })

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('message');
            socket.disconnect()
        };
    }, []);

}

export const useSocket =  () => useContext(Context)