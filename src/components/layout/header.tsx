import React from "react";
import {Flex, Header, Title} from "@mantine/core";

export function AppHeader(){
    return (
        <Header height={70} p={"xs"} sx={{display:"flex",alignItems:"center"}}>
            <Flex align={"center"} justify={"space-between"}>
                <Title order={2} size={"h2"} >Chatify</Title>
            </Flex>
        </Header>
    )
}