// eslint-disable-next-line no-unused-vars
import React from 'react'
import { VStack, Box, Container, Heading, Text, AspectRatio, Tooltip } from "@chakra-ui/react"
import Nav from './Nav'

function Sections() {
  return (

    <VStack bg='blackAlpha.400'>
      <Box>
        <Heading fontSize='xl' className="title" mt={4}>WELCOME</Heading>
        <Text className='text' as='i' fontSize='xl' textTransform='uppercase'>
          <span>Brief background </span> about our community
        </Text>
        <Container maxW='container.lg' py={4}>
          Ndevana Location is a rural community located in the Eastern Cape Province of South Africa, between the townships of Ilitha and Phakamisa. The community was founded on August 26, 1976, and has since grown and developed into a vibrant and diverse place to live.
          The community is governed by the Buffalo City Metro Municipality and falls within ward 49.It is represented by a councilor who is responsible for the area
          It is made out of these areas Bhongweni, Thubalethu, Ekuphumleni, Gesini, Velwano, Mpolweni, Masijongane, New Rest,Lusaka,
          Mthombo, Santini, Highway, Ezintenteni, Gugulethu and Ntakazilali.
        </Container>
      </Box>
    </VStack>
  )
}

export default Sections
