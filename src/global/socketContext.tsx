import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import io, {Socket} from "socket.io-client";
import {MessageModel} from "@/utils/models/MessageModel";
import {useAtom, useSetAtom} from "jotai";
import {messagesAtom} from "@/global/messages.atom";
import { useNavigate } from "react-router-dom";
import {usersAtom} from "@/global/users.atom";
import {userAtom} from "@/global/user.atom";

export const SERVER = "http://localhost:8000"

const Context = createContext(undefined as unknown as ReturnType<typeof io>)
const socket = io(SERVER, {
    autoConnect:false
});

type props = {
    children:ReactNode
}

export function SocketProvider({children}:props){
    const [username] = useAtom(userAtom)
    const navigate = useNavigate();
    useEffect(() => {
        if (!username || username == "")
            navigate("/login")
    },[username])
    socket.auth = {username}
    socket.connect()
    useStartSocket(socket,username)
    return (
        <Context.Provider value={socket}>
            {username ? children : null}
        </Context.Provider>
    )
}

export function useStartSocket(socket:ReturnType<typeof io>,username:string | null){
    const [isConnected, setIsConnected] = useState(socket.connected);
    const setChat = useSetAtom(messagesAtom)
    const setUsers = useSetAtom(usersAtom)
    useEffect(() => {
        socket.on('connect', () => {
            //requesting users
            socket.emit("newUser")
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on("message",(msg:MessageModel) => {
            setChat(chat => [...chat,msg])
        })

        socket.on("userList", (users:string[]) => {
            console.log(users)
            setUsers(users)
        })

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('message');
            socket.off('requestUsers');
            socket.disconnect()
        };
    }, []);

}

export const useSocket =  () => useContext(Context)