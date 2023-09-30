// Chakra imports
import {
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";

// Assets
import { RiArrowUpSFill } from "react-icons/ri";

export default function TodaySchedule(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  return (
    <Card
      justifyContent='center'
      align='left'
      direction='row'
      w='100%'
      mb='0px'
      {...rest}>
      
      <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'AGE
          lineHeight='100%'>
          Schedule for Today
        </Text>
        <Flex></Flex>
    </Card>
  );
}
