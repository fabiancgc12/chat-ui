import React from "react";
import {MessageModel} from "@/utils/models/MessageModel";
import {Box, Text} from "@mantine/core";
import {socket} from "@/hooks/useStartSocket";

type props = {
    msg:MessageModel
}
export function Message({msg}:props){
    let alignMessage = "start"
    let alignName:"start" | "end" = "start"
    let bg = "gray.7"
    let name = msg.user
    if (msg.user == socket.id){
        alignMessage = "end"
        alignName = "end"
        bg = "green.9"
        name = "You"
    }
    return (
        <Box
            sx={theme => ({
                alignSelf: alignMessage,
            })}
            miw={"20%"}
            maw={"75%"}
        >
            <Text fz="xs" ta={alignName}>{name}</Text>
            <Box
                sx={theme => ({
                    borderRadius: "5px",
                })}
                px={"sm"}
                c={"gray.0"}
                py={4}
                bg={bg}
            >
                <Text fz="md" sx={{wordBreak: "break-all"}}>{msg.message}</Text>
                <Text fz={"xs"} ta={"right"}>{formatTime(msg.timeStamp)}</Text>
            </Box>
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