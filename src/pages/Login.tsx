import React from "react";
import {Container, Title, Text, Center} from "@mantine/core";
import { LoginForm } from "@/components/loginForm/loginForm";

export function LoginPage(){
    return (
    <Center h={"100vh"}>
        <Container
            maw={400}
            p={"md"}
            sx={theme => ({
                border:`1px solid ${theme.black}`,
                borderRadius:"15px",
                boxShadow:`${theme.colors.dark[3]} 0px 0px 15px 0px`
            })}
        >
            <Title>Welcome to Chatify</Title>
            <Text>Please enter your username</Text>
            <LoginForm/>
        </Container>
    </Center>)
}