// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Grid,
  GridItem,
  Link,
  IconButton,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
  SimpleGrid
} from "@chakra-ui/react";
import { FaMapMarker, FaEnvelope, FaPhoneSquare } from "react-icons/fa";

function Contacts() {
  return (
    <SimpleGrid w={"100%"} py={10} align="center">
      {Form()}
      {Info()}
    </SimpleGrid>
  );
}

function Form() {
  return (<FormControl isRequired>
    <FormLabel>First name</FormLabel>
    <Input placeholder="First name" />
  </FormControl>)
}

function Info() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={4} align="stretch">
      <GridItem colSpan="1">
        <Link
          href="mailto:info@ndevana.co.za?subject=Contact%20Message%20from%20MyNdevana%20Website"
          color="#fff"
          _hover={{
            outline: "0",
            color: '#fff',
            IconButton: {
              mb: 1
            }
          }}
        >
          <IconButton size="lg"
            variant="outline"
            rounded="full"
            border="2px"
            color="#c6a799"
            borderColor="#c6a799"
            outline="0px solid #c6a799"
            mb={1}
            _hover={{
              outline: "0",
              bg: "#c6a799",
              color: '#fff',
              outlineColor: "#c6a799",
              outlineWidth: "0px",
              border: "1px",
              borderColor: "#c6a799",
            }}
            _focus={{
              outline: "0",
              bg: "#c6a799",
              color: '#fff',
              outlineColor: "#c6a799",
              outlineWidth: "0",
              border: "1px",
              borderColor: "#c6a799",
            }}
            _visible={{
              outline: "0",
              bg: "#c6a799",
              color: '#fff',
              outlineColor: "#c6a799",
              outlineWidth: "0",
              border: "1px",
              borderColor: "#c6a799",
            }}
          >
            <FaEnvelope fontSize="26px" />
          </IconButton>
          <br />
          <Text as="i" fontSize="sm">
            info@ndevana.co.za
          </Text>
        </Link>
      </GridItem>
      <GridItem colSpan="2">
        <Link href="https://goo.gl/maps/xvWofQfiMXaR3TPGA" target="_blank">
          <FaMapMarker />
          <Text as="i" fontSize="sm">
            1855 Velwano Extension, Ndevana Location, <br />
            King Williams Town, 5200
          </Text>
        </Link>
      </GridItem>
      <GridItem colSpan="1">
        <Link href="tel:+27674026339">
          <FaPhoneSquare />
          +27674026339
        </Link>
      </GridItem>
    </Grid>
  )
}

export default Contacts;
