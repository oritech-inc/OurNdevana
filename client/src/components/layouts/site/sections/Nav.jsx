// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Flex, Link, Box, Image, Menu, MenuButton, MenuList, Heading, IconButton, MenuItem } from '@chakra-ui/react'

function Nav() {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='0' bg={'blackAlpha.800'} color='white'>
      <Box p='2'>
        {pageTitle()}
      </Box>
      <Box bg='dark' flex={1} textTransform='uppercase' color="white.700">
        {pageLink()}
      </Box>
      <Box bg='dark' p={2}>
        {accountLink()}
      </Box>
    </Flex>
  )
}

function pageTitle() {
  return (
    <Link path='/'>
      <Image src='../../../../../public/logo-str.png' borderRadius='full'
        boxSize='40px' alt="logo"
      />
    </Link>
  )
}

function pageLink() {
  return (
    <nav>
      <Link className='active' href="#about">
        About
      </Link>
      <Link href="#" pl={1.5}>
        Council
      </Link>
      <Link href="#" pl={1.5}>
        Partners
      </Link>
      <Link href="#" pl={1.5}>
        Blog
      </Link>
      <Link href="#" pl={1.5}>
        Gallery
      </Link>
      <Link href="#" pl={1.5}>
        Contact
      </Link>
    </nav>
  )
}

function accountLink() {
  return (
    <Menu>
      <MenuButton variant='outline'>
        Accounts
      </MenuButton>
      <MenuList>
        <MenuItem command='⌘T'>
          Register
        </MenuItem>
        <MenuItem command='⌘N'>
          Sign in
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default Nav
