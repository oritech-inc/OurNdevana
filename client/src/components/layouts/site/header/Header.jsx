// eslint-disable-next-line no-unused-vars
import React from 'react'
import { VStack, Box, Text, Container, Link, Button } from "@chakra-ui/react"
import Nav from './Nav'
// import { ChevronDownIcon } from '@chakra-ui/icon'
// import {ChevronDown} from "react-icons/"
function Header() {
    return (
        <header id="app-header">
            <VStack  spacing={0} align='stretch' justify='center' textAlign="middle" h="92%">
                <Box >
                    <Text fontSize='20px' color='#c6a779' opacity='0.8' textTransform='uppercase' py={8}>
                        <span style={{ fontSize: '30px', color: '#f14936', fontWeight: 'bold' }}>My Ndevana</span>
                        Community United
                    </Text>
                </Box>
                <Box >
                    <Container maxW='container.md' py={6}>
                        Here, you will find information about the people, places, and events that make our community special.
                        From local businesses and organizations, to upcoming events and news, this site is your one-stop-shop for everything happening in our community
                    </Container>
                </Box>
                <Box>
                    <Link href='#about'>
                        <Button bg='1px solid #c6a779' variant='outline' size="lg"
                            color="#c6a779" border="0" top="30"
                            _hover={{
                                textDecoration: 'none',
                                color: '#c6a779',
                                border: 'none',
                                backgroundColor: 'transparent'
                            }}
                        >
                            EXPLORE
                            
                        </Button>
                    </Link>
                </Box>
            </VStack>
            <Nav />
        </header>
    )
}

export default Header
