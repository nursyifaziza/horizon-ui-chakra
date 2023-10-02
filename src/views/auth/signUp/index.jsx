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
    CheckboxGroup,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
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
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
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
                    <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{
                            base: "0px",
                            md: "0px"
                        }}
                            type='text'
                            placeholder='Full Name*'
                            mb='24px'
                            fontWeight='500'
                            size='lg'/>
                        <FormLabel>Email</FormLabel>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{
                            base: "0px",
                            md: "0px"
                        }}
                            type='email'
                            placeholder='Email Address*'
                            mb='24px'
                            fontWeight='500'
                            size='lg'/>
                        <FormLabel>Password</FormLabel>
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
                        <FormLabel>Practice License ID</FormLabel>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{
                            base: "0px",
                            md: "0px"
                        }}
                            type='text'
                            placeholder='Practice License ID*'
                            mb='24px'
                            fontWeight='500'
                            size='lg'/>
                        <FormLabel>City</FormLabel>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{
                            base: "0px",
                            md: "0px"
                        }}
                            type='text'
                            placeholder='City*'
                            mb='24px'
                            fontWeight='500'
                            size='lg'/>
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{
                            base: "0px",
                            md: "0px"
                        }}
                            type='number'
                            placeholder='ex. 0851122334455'
                            mb='24px'
                            fontWeight='500'
                            size='lg'/>
                        <FormLabel>Education</FormLabel>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{
                            base: "0px",
                            md: "0px"
                        }}
                            type='text'
                            placeholder='ex. Bachelor of Psychology'
                            mb='24px'
                            fontWeight='500'
                            size='lg'/>
                        <FormLabel>Current Job</FormLabel>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{
                            base: "0px",
                            md: "0px"
                        }}
                            type='text'
                            placeholder='ex. Rehabilitation Doctor at Merdeka Hospital'
                            mb='24px'
                            fontWeight='500'
                            size='lg'/>
                        <FormLabel>Proficiency</FormLabel>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{
                            base: "0px",
                            md: "0px"
                        }}
                            type='text'
                            placeholder='ex. Family, Study and school life, Mood and Emotion, etc'
                            mb='24px'
                            fontWeight='500'
                            size='lg'/>
                        <FormLabel>Available Days</FormLabel>
                        <CheckboxGroup colorScheme='brandScheme'>
                            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                            <Checkbox value='monday'>Monday</Checkbox>
                                <Checkbox value='tuesday'>Tuesday</Checkbox>
                                <Checkbox value='wednesday'>Wednesday</Checkbox>
                                <Checkbox value='thursday'>Thursday</Checkbox>
                                <Checkbox value='friday'>Friday</Checkbox>
                                <Checkbox value='saturday'>Saturday</Checkbox>
                                <Checkbox value='sunday'>Sunday</Checkbox>
                            </Grid>
                        </CheckboxGroup>
                        <FormLabel mt={5} >Your Motivation</FormLabel>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{
                            base: "0px",
                            md: "0px"
                        }}
                            type='text'
                            placeholder='ex. I want to contribute as a professional expert'
                            mb='24px'
                            fontWeight='500'
                            size='lg'/>
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
