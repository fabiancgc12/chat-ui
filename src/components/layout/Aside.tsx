import React from "react";
import {MediaQuery, Navbar, Text, Title} from "@mantine/core";

export function AppNavBar(){
    return (
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                <Navbar.Section>
                    <Title order={3} align={"center"}>Contacts</Title>
                </Navbar.Section>
                <Navbar.Section>
                    <ul>
                        <li>user 1</li>
                        <li>user 2</li>
                        <li>user 3</li>
                        <li>user 4</li>
                        <li>user 5</li>
                    </ul>
                </Navbar.Section>
            </Navbar>
        </MediaQuery>
    )
}