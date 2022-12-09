import {TextInput} from "@mantine/core";
import React, {useState} from "react";

export function LoginForm(){
    const [username,setUsername] = useState("")
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }
    return (
        <form onSubmit={onSubmit}>
            <TextInput value={username} onChange={(e) => setUsername(e.target.value)}/>
        </form>
    )
}