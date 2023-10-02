/* eslint-disable */
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
import {NavLink} from "react-router-dom";
// Chakra imports
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
// Custom components
import {HSeparator} from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/auth.png";
import {FcGoogle} from "react-icons/fc";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import {RiEyeCloseLine} from "react-icons/ri";

function SignUp() {
    // Chakra color mode
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorBrand = useColorModeValue("brand.500", "white");
    const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
    const googleText = useColorModeValue("navy.700", "white");
    const googleHover = useColorModeValue({
        bg: "gray.200"
    }, {bg: "whiteAlpha.300"});
    const googleActive = useColorModeValue({
        bg: "secondaryGray.300"
    }, {bg: "whiteAlpha.200"});
    const [show,
        setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
        <DefaultAuth illustrationBackground={illustration} image={illustration}>
            <Flex
                maxW={{
                base: "100%",
                md: "max-content"
            }}
                w='100%'
                mx={{
                base: "auto",
                lg: "0px"
            }}
                me='auto'
                h='100%'
                alignItems='start'
                justifyContent='center'
                mb={{
                base: "30px",
                md: "60px"
            }}
                px={{
                base: "25px",
                md: "0px"
            }}
                mt={{
                base: "40px",
                md: "14vh"
            }}
                flexDirection='column'>
                <Box me='auto'>
                    <Heading color={textColor} fontSize='36px' mb='10px'>
                        Welcome to Radiate!
                    </Heading>
                    <Text
                        mb='36px'
                        ms='4px'
                        color={textColorSecondary}
                        fontWeight='400'
                        fontSize='md'>
                        Have an account already?
                        <NavLink to='/auth/sign-in'>
                            <Text color={textColorBrand} as='span' ms='5px' fontWeight='500'>
                                Login
                            </Text>
                        </NavLink>
                    </Text>
                </Box>
                <Flex
                    zIndex='2'
                    direction='column'
                    w={{
                    base: "100%",
                    md: "420px"
                }}
                    maxW='100%'
                    background='transparent'
                    borderRadius='15px'
                    mx={{
                    base: "auto",
                    lg: "unset"
                }}
                    me='auto'
                    mb={{
                    base: "20px",
                    md: "auto"
                }}>
                    <Button
                        fontSize='sm'
                        me='0px'
                        mb='26px'
                        py='15px'
                        h='50px'
                        borderRadius='16px'
                        bg={googleBg}
                        color={googleText}
                        fontWeight='500'
                        _hover={googleHover}
                        _active={googleActive}
                        _focus={googleActive}>
                        <Icon as={FcGoogle} w='20px' h='20px' me='10px'/>
                        Sign up with Google
                    </Button>
                    <Flex align='center' mb='25px'>
                        <HSeparator/>
                        <Text color='gray.400' mx='14px'>
                            or
                        </Text>
                        <HSeparator/>
                    </Flex>
                    <FormControl>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{
                            base: "0px",
                            md: "0px"
                        }}
                            type='email'
                            placeholder='Full Name*'
                            mb='24px'
                            fontWeight='500'
                            size='lg'/>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{
                            base: "0px",
                            md: "0px"
                        }}
                            type='email'
                            placeholder='Email address*'
                            mb='24px'
                            fontWeight='500'
                            size='lg'/>
                        <InputGroup size='md'>
                            <Input
                                isRequired={true}
                                fontSize='sm'
                                placeholder='Password* (min. 8 characters)'
                                mb='24px'
                                size='lg'
                                type={show
                                ? "text"
                                : "password"}
                                variant='auth'/>
                            <InputRightElement display='flex' alignItems='center' mt='4px'>
                                <Icon
                                    color={textColorSecondary}
                                    _hover={{
                                    cursor: "pointer"
                                }}
                                    as={show
                                    ? RiEyeCloseLine
                                    : MdOutlineRemoveRedEye}
                                    onClick={handleClick}/>
                            </InputRightElement>
                        </InputGroup>

                        <Button
                            fontSize='sm'
                            variant='brand'
                            fontWeight='500'
                            w='100%'
                            h='50'
                            mb='24px'>
                            Create account
                        </Button>
                    </FormControl>
                </Flex>
            </Flex>
        </DefaultAuth>
    );
}

export default SignUp;
