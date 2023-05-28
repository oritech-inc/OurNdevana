// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
    Grid, GridItem, Link, Heading, Center, FormControl, FormLabel, Input
} from "@chakra-ui/react"
import { FaMapMarker, FaEnvelope, FaPhoneSquare } from "react-icons/fa";

function Footer() {
    return (
        <Center w={'100%'} align='center'>
            
            <Grid templateColumns='repeat(5, 1fr)' gap={4} align='stretch'>
                <GridItem colSpan='1'>
                    <Link href="mailto:info@ndevana.co.za?subject=Query+from+website">
                    <FaEnvelope/>
                    info@ndevana.co.za
                    </Link>
                </GridItem>
                <GridItem colSpan='2'>
                    <Link href="tel:+27674026339">
                    <FaMapMarker/>
                    1855 Velweno Extension, Ndevana Location, King Williams Town, 5200, South Africa
                    </Link>
                </GridItem>
                <GridItem colSpan='1'>
                    <Link href="tel:+27674026339">
                    <FaPhoneSquare/>
                    +27674026339
                    </Link>
                </GridItem>
            </Grid>
            {ContactForm()}
        </Center>
    )
}

function ContactForm() {
    <FormControl isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder='First name' />
</FormControl>
}

export default Footer
