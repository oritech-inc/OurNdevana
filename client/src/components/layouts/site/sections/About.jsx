// eslint-disable-next-line no-unused-vars
import React from 'react'
import { VStack, Box, Container, Heading, Text, AspectRatio, Tooltip } from "@chakra-ui/react"

function Sections() {
  return (

    <VStack bg='blackAlpha.400'>
      <Box>
        <Heading className="title" my={4}>ABOUT US</Heading>
        <Text className='text' as='i' fontSize='md' textTransform='uppercase'>
          <span>brief overview </span> of our community
        </Text>
        <Container maxW='container.lg' py={4}>
          Ndevana Location is a rural community located in the Eastern Cape Province of South Africa, between the townships of Ilitha and Phakamisa. The community was founded on August 26, 1976, and has since grown and developed into a vibrant and diverse place to live.
          The community is governed by the Buffalo City Metro Municipality and falls within ward 49.It is represented by a councilor who is responsible for the area
          It is made out of these areas Bhongweni, Thubalethu, Ekuphumleni, Gesini, Velwano, Mpolweni, Masijongane, New Rest,Lusaka,
          Mthombo, Santini, Highway, Ezintenteni, Gugulethu and Ntakazilali.
        </Container>
        <Box align="center">
          <Tooltip placement='top' label='Click to play or pause video clip' hasArrow bg='#c6a779' color='white' rounded='full'>
            <AspectRatio maxW='70%' h="300px" rounded='full' my={6} m={6} ratio={1}
              _hover={{
                cursor: 'pointer',
                opacity: '.9'
              }}
            >
              <video controls muted autoPlay loop src='./../../../../../public/vids/home.mp4'></video>
            </AspectRatio>
          </Tooltip>
        </Box>
      </Box>
    </VStack>
  )
}

export default Sections
