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

// Chakra imports
import {Box, SimpleGrid} from "@chakra-ui/react";

// Custom components
import React from "react";
import TotalSpent from "views/admin/default/components/TotalSpent";
import ComplexTable from "views/admin/default/components/ComplexTable";
import {columnsDataComplex} from "views/admin/default/variables/columnsData";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import TodayAppointments from "./components/TodayAppointments";

export default function UserReports() {
    return (
        <Box
            pt={{
            base: "130px",
            md: "80px",
            xl: "80px"
        }}>

            <SimpleGrid
                columns={{
                base: 1,
                md: 2,
                xl: 2
            }}
                gap='20px'
                mb='20px'>
                <TodayAppointments/>
                <TotalSpent/>
            </SimpleGrid>

            <Box>
                <ComplexTable columnsData={columnsDataComplex} tableData={tableDataComplex}/>
            </Box>

        </Box>
    );
}
