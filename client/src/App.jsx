/* eslint-disable no-unused-vars */
import useDisclosure from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { VStack, Box, StackDivider } from "@chakra-ui/react"
import './App.css'
import Header from './components/layouts/site/header/Header'
import Sections from './components/layouts/site/sections/Sections'
import Footer from './components/layouts/site/footer/footer'
import drawer from './components/helper/Drawer'

function App() {
  const { onClose, onOpen, isOpen } = useDisclosure;
  return (
    <Router onLoad={appConfigs()}>

      <VStack spacing={0} align='stretch' h="100%" w="100%" p="0" m="0">
        <Header />
        <Sections />
        <Footer />
      </VStack>
    </Router>
  )
}

function appConfigs() {

  if (checkJavaEnabled()) {
    checkNetStatus();
  }
  else {
    return (<drawer />)
  }
}

function checkNetStatus() {
  const elem = document.getElementById('app-root');
  if (navigator.onLine) {
    alert('True')
  } else {
    alert('False')
  }
}

function checkJavaEnabled() {
  return navigator.javaEnabled();
}


export default App