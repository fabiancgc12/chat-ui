import React from "react";
import {Box} from "@mantine/core";
import {useAtom} from "jotai";
import {userAtom} from "@/global/user.atom";

type props = {
    username:string
}

export function UserNavItem({username}:props){
    const [currentUser] = useAtom(userAtom)
    let bg = "gray.3";
    let order = 0
    if (currentUser == username){
        bg = "blue.3"
        order = -1
    }
    return (
        <Box p={"xs"} bg={bg} sx={{borderRadius:"5px",order}}>{username}</Box>
    )
}