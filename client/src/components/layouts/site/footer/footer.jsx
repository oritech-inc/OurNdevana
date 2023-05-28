// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
  VStack, Box, Heading, Text, Image, Stack, Tooltip,
  Card, CardBody, Center, SimpleGrid, GridItem
} from "@chakra-ui/react"
import ContactForm from './ContactForm'

function Footer() {
  return (
    <footer id='app-footer'>
        <Box>
          <Heading className="title" my={4}>CONTACTS</Heading>
          <Text className='text' as='i' fontSize='md' textTransform='uppercase'>
            <span>Let us</span> get in touch
          </Text>
        </Box>
        <Box>
          <ContactForm/>
        </Box>
        <Box bg='blackAlpha.900'>
          <Text as='i' fontSize='sm'>
            MyNdevana &copy; 2023
          </Text>
        </Box>
    </footer>
  )
}

// function ContactForm()
// {
  
// }

export default Footer
