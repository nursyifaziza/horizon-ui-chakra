// Chakra imports
import {Button, Flex, Icon, Stack, Text} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";

// Assets
import {IoCalendarOutline, IoChatbubbleOutline, IoTimeOutline} from "react-icons/io5";

export default function Appointment(props) {
    const {
        ...rest
    } = props;

    return (
        <Card
            bgColor={"#B6D7A8"}
            borderRadius='18px'
            border={"3px solid #48B952"} 
            justifyContent='center'
            align='left'
            direction='column'
            w='100%'
            mb='0px'
            mt='16px'

            {...rest}>

            <Stack direction="row" spacing="auto" align="center" marginBottom={4}>
                <Text fontWeight={"bold"} fontSize={'md'}>Patient name</Text>
                <Stack direction="row" spacing={4} align="center">
                    <Button size="sm" variant="brand">Start session</Button>
                    <Button size="sm" variant="brand">...</Button>
                </Stack>
            </Stack>

            <Stack direction="row" spacing={4} align="left">
                <Text>30 min</Text>
                <Text>Sleep, Depression, Relationship</Text>
            </Stack>

            <Stack direction="row" spacing={4} align="center">
                <Flex>
                    <Icon
                        transition='0.2s linear'
                        w='20px'
                        h='20px'
                        as={IoCalendarOutline}
                        color='#48B952'/>
                    <Text fontWeight={'medium'} color={'#48B952'}>Sep 30, 2023</Text>
                </Flex>
                <Flex>
                    <Icon
                        transition='0.2s linear'
                        w='20px'
                        h='20px'
                        as={IoTimeOutline}
                        color='#48B952'/>
                    <Text color={'#48B952'}>03:00-03.30 PM</Text>
                </Flex>
                <Flex>
                    <Icon
                        transition='0.2s linear'
                        w='20px'
                        h='20px'
                        as={IoChatbubbleOutline}
                        color='#48B952'/>
                    <Text color={'#48B952'}>Chat</Text>
                </Flex>
            </Stack>
        </Card>
    );
}
