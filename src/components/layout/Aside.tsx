import React from "react";
import {List, MediaQuery, Navbar, Stack, Text, Title} from "@mantine/core";
import {useAtom} from "jotai";
import {usersAtom} from "@/global/users.atom";
import {UserNavItem} from "@/components/userNavItem/userNavItem";

type props = {
    opened:boolean
}

export function AppNavBar({opened}:props){
    const [users] = useAtom(usersAtom)
    return (
        <Navbar p="md" hiddenBreakpoint="sm" width={{base:"50%",sm:200,lg:300}}hidden={opened}>
            <Navbar.Section>
                <Title order={3} align={"center"}>Users</Title>
            </Navbar.Section>
            <Navbar.Section>
                <Stack>
                    {users.map(u => <UserNavItem username={u} key={u} />)}
                </Stack>
            </Navbar.Section>
        </Navbar>
    )
}