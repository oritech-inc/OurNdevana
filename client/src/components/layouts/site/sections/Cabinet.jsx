// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
    VStack, Box, Heading, Text, Image, Stack, Tooltip,
    Card, CardBody, Center, SimpleGrid, GridItem
} from "@chakra-ui/react"

function Cabinet() {
    return (

        <Stack>
            <Box>
                <Heading className="title" my={4}>CABINET</Heading>
                <Text className='text' as='i' fontSize='md' textTransform='uppercase'>
                    <span>Current </span> council representatives
                </Text>
            </Box>
            <SimpleGrid columns={[3, null, 4]} gap={6}>
                {TopProfileRow()}
                {MidProfileRow()}
                {LowProfileRow()}
            </SimpleGrid>
        </Stack>
    )
}

function TopProfileRow() {
    return (
        <>
            <Box w='100%' bg='blue.500' >s</Box>
            <Box w='100%' bg='blue.500' >s</Box>
            <Box w='100%' bg='blue.500' >s</Box>
            <Box w='100%' bg='blue.500' >s</Box>
        </>
    )
}

function MidProfileRow() {
    return (
        <>
            <Box w='100%' bg='blue.500' >s</Box>
            <Box w='100%' bg='blue.500' >s</Box>
            <Box w='100%' bg='blue.500' >s</Box>
            <Box w='100%' bg='blue.500' >s</Box>
        </>
    )
}

function LowProfileRow() {
    return (
        <>
            <Box w='100%' bg='blue.500' >s</Box>
            <Box w='100%' bg='blue.500' >s</Box>
        </>
    )
}

export default Cabinet
