import React from "react";
import {MessageType} from "@/utils/types/Message.type";
import {Box, Text} from "@mantine/core";
import {socket} from "@/hooks/useStartSocket";

type props = {
    msg:MessageType
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
            <Text fz={"xs"} ta={"right"}>{msg.timeStamp}</Text>
        </Box>
        )
}