// eslint-disable-next-line no-unused-vars
import React from 'react'
import { VStack, Box, Text, Container, Link, Button, Tooltip, AspectRatio } from "@chakra-ui/react"
import Nav from './Nav'
import { FaChevronDown } from 'react-icons/fa'
function Header() {
    const url = window.location.origin;
    return (
        <Box>
            <header id="app-header">
                <Nav />
                {Head()}
                <Box align="center">
                    <Tooltip placement='top' label='Click to play or pause video clip' hasArrow bg='#c6a779' color='white' rounded='full'>
                        <AspectRatio maxW='40%' h="300px" rounded='full' my={6} m={6} ratio={1}
                            _hover={{
                                cursor: 'pointer',
                                opacity: '.9'
                            }}
                        >
                            <video controls muted autoPlay loop src={url + '/public/vids/home.mp4'}></video>
                        </AspectRatio>
                    </Tooltip>
                </Box>
            </header>
        </Box>
    )
}

function Head() {
    return (
        <VStack spacing={0} align='stretch' justify='center' textAlign="middle" h="60%">
            <Box >
                <Text fontSize='20px' color='#c6a779' opacity='0.8' textTransform='uppercase' py={8}>
                    <span style={{ fontSize: '30px', color: '#f14936', fontWeight: 'bold' }}>Our Ndevana</span>
                    Community Application
                </Text>
            </Box>
            <Box >
                <Container maxW='container.md'>
                    Find information about the people, places, and events that make our community special. From local businesses and organizations,
                    to upcoming events and news, this site is your one-stop-shop for everything happening in our community
                </Container>
            </Box>
            <Box>
                <Link href='#about'>
                    <Button bg='1px solid #c6a779' variant='outline' size="sm"
                        color="#c6a779" border="0" top="30"
                        _hover={{
                            textDecoration: 'none',
                            color: '#c6a779',
                            border: 'none',
                            backgroundColor: 'transparent'
                        }}
                    >
                        Scroll down to explore<br />
                        <FaChevronDown />
                    </Button>
                </Link>
            </Box>
        </VStack>
    )
}
export default Header
