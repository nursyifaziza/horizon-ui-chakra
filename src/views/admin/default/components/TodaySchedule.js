// Chakra imports
import {Button, Stack, Text, useColorModeValue} from "@chakra-ui/react";

// Custom components
import Card from "components/card/Card.js";
import Appointment from "views/admin/default/components/Appointment";
import React from "react";

export default function TodaySchedule(props) {
    const {
        ...rest
    } = props;

    // Chakra Color Mode
    const textColor = useColorModeValue("secondaryGray.900", "white");


    return (
        <Card
            justifyContent='center'
            align='left'
            direction='row'
            w='100%'
            mb='0px'
            {...rest}>

            <Stack direction="row" spacing="auto" align="center">
                <Text color={textColor} fontSize='22px' fontWeight='700' AGE lineHeight='100%'>
                    Schedule for Today
                </Text>
                <Button fontWeight={500} size="sm" variant="outline">View all schedule</Button>
            </Stack>

            <Appointment/> 
            <Appointment/> 
        </Card>
    );
}
