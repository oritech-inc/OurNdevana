// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
  VStack, Box, Heading, Text, Image, Stack, Tooltip,
  Card, CardBody, Center, SimpleGrid, GridItem
} from "@chakra-ui/react"
import Contact from './Contacts'

function Footer() {
  return (
    <footer id='app-footer'>
      <Box bg='gray.300'>
        {ContactTitle()}
        {ContactBody()}
        {ContactFooter()}
      </Box>
    </footer>
  )
}

function ContactTitle() {
  return (
    <Box>
      <Heading fontSize='xl' className="title" mt={4}>CONTACTS</Heading>
      <Text className='text' as='i' fontSize='xl' textTransform='uppercase'>
        <span>Let us</span> get in touch
      </Text>
    </Box>
  )
}

function ContactBody() {
  return (
    <Box>
      <Contact />
    </Box>
  )
}
function ContactFooter() {
  return (
    <Box bg='blackAlpha.900' color='white'>
      <Text as='i' fontSize='sm'>
        MyNdevana &copy; 2023
      </Text>
    </Box>
  )
}

export default Footer
