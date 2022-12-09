import React from "react";
import {List, MediaQuery, Navbar, Stack, Text, Title} from "@mantine/core";
import {useAtom} from "jotai";
import {usersAtom} from "@/global/users.atom";
import {UserNavItem} from "@/components/userNavItem/userNavItem";

export function AppNavBar(){
    const [users] = useAtom(usersAtom)
    return (
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                <Navbar.Section>
                    <Title order={3} align={"center"}>Contacts</Title>
                </Navbar.Section>
                <Navbar.Section>
                    <Stack>
                        {users.map(u => <UserNavItem username={u} key={u} />)}
                    </Stack>
                </Navbar.Section>
            </Navbar>
        </MediaQuery>
    )
}