import React from "react";
import logo from "assets/img/logo.png";

// Chakra imports
import { Flex } from "@chakra-ui/react";

// Custom components
import { Image } from '@chakra-ui/react'
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  // let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Image h='auto' w='175px' my='32px' src={logo} />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
