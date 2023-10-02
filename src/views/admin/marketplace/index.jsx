/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _|
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|

=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

// Chakra imports
import {
    Box,
    Stack,
    Container
} from "@chakra-ui/react";

// Assets
import EventCalendar from "components/calendar/MiniCalendar"
import TodayAppointments from "../default/components/TodayAppointments";

export default function Marketplace() {
    return (
        <Box
            pt={{
            base: "180px",
            md: "80px",
            xl: "80px"
        }}>
            <Stack direction={"row"}>
                <Stack direction={"column"}>
                    <EventCalendar/>
                    <TodayAppointments/>
                </Stack>
                <Container>
                    <TodayAppointments/>
                </Container>
            </Stack>
        </Box>
    );
}
