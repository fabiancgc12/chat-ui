import {TextInput,Text} from "@mantine/core";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {SERVER} from "@/global/socketContext";

export function LoginForm(){
    const [username,setUsername] = useState("");
    const [error,setError] = useState("")
    const navigate = useNavigate();
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            setError("");
            const body = {username}
            const res = await fetch(`${SERVER}/login`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method:"post",
                body: JSON.stringify(body)
            });
            const data = await res.json()
            localStorage.setItem('username', data.username);
            navigate('/');
        } catch (e){
            setError("Something went wrong")
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <TextInput value={username} onChange={(e) => setUsername(e.target.value)}/>
            {error && <Text>{error}</Text>}
        </form>
    )
}