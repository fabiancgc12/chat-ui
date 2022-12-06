import React from "react";
import {MessageModel} from "@/utils/models/MessageModel";
import {Box, Text} from "@mantine/core";
import {socket} from "@/hooks/useStartSocket";

type props = {
    msg:MessageModel
}
export function Message({msg}:props){
    return (
        <Box
            sx={theme => ({
                alignSelf: msg.user == socket.id ? "end" : "start",
                borderRadius: "5px",
                backgroundColor: msg.user == socket.id  ? theme.colors.green[9] : theme.colors.gray[7]
            })}
            miw={"20%"}
            maw={"65%"}
            px={"sm"}
            c={"gray.0"}
            py={4}
        >
            <Text fz="xs">{msg.user}</Text>
            <Text fz="md">{msg.message}</Text>
            <Text fz={"xs"} ta={"right"}>{formatTime(msg.timeStamp)}</Text>
        </Box>
        )
}

function formatTime(ms:number){
    const date = new Date(ms);
    const timeOfDay = date.getHours() >= 12 ? "pm" : "am"
    const hours = (date.getHours() % 12 || 12).toString().padStart(2,"0");
    const minutes = date.getMinutes().toString().padStart(2,"0")
    return `${hours}:${minutes} ${timeOfDay}`
}