// eslint-disable-next-line no-unused-vars
import React from 'react'
import { VStack, Box, Container, Heading, Text, AspectRatio } from "@chakra-ui/react"
import About from './About'
import Council from './Council'
import Cabinet from './Cabinet'

function Sections() {
  return (
    <section id='Sections'>
      <div id="about">
        {/* {<About  />} */}
      </div>
      <div id="council">
        {<Council />}
      </div>
      <div id="cabinet">
        {<Cabinet />}
      </div>
    </section>
  )
}

export default Sections
