import React from "react";
import {MediaQuery, Navbar, Text, Title} from "@mantine/core";
import {useAtom} from "jotai";
import {usersAtom} from "@/global/users.atom";

export function AppNavBar(){
    const [users] = useAtom(usersAtom)
    return (
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                <Navbar.Section>
                    <Title order={3} align={"center"}>Contacts</Title>
                </Navbar.Section>
                <Navbar.Section>
                    <ul>
                        {users.map(u => <li key={u}>{u}</li>)}
                    </ul>
                </Navbar.Section>
            </Navbar>
        </MediaQuery>
    )
}