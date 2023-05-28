// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
    VStack, Box, Heading, Text, Image, Stack, Tooltip,
    Card, CardBody, Center, Grid, GridItem
} from "@chakra-ui/react"

function Council() {
    return (

        <VStack>
            <Box>
                <Heading className="title" my={4}>COUNCILLOR</Heading>
                <Text className='text' as='i' fontSize='md' textTransform='uppercase'>
                    <span>Message </span> from our ward councillor
                </Text>
            </Box>
            <Box w={'85%'} align='center' py={6}>
                <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden'>
                    <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }}
                        src='https://www.buffalocity.gov.za/CM/uploads/wards/1645168617.png' alt='Ward councillor' />
                    <Stack>
                        {CardItem()}
                    </Stack>
                </Card>
            </Box>
            <Center pt='4' w={'90%'} align='center'>
                {CardGrid()}
            </Center>
        </VStack>
    )
}

function CardItem() {
    return (
        <CardBody pt='1'>
            <Heading pt="1.5" size='md'>
                AYANDA NKALA
            </Heading>

            <Text py='.5' fontSize='sm'>
                My fellow residents of Ndevana Location, it is my honor to stand before you today as your councilor for Ward 49.
                I am proud to be a part of this community, we all know, living in a rural area comes with its own set of challenges,
                but I want to remind you that we are a strong and resilient community. Together, we can overcome any obstacle that comes our way.
                That is why I urge each and every one of you to come together and strive for progress and development.

                I encourage you to take an active role in shaping the future of our community. Get involved in local government,
                make your voices heard and let Us work together to make Ndevana Location an even better place to live.
                I assure you that our council is fully committed to supporting the community and addressing your needs.
                We are here to serve you, and we will do everything in our power to make Ndevana Location a better place for all of us.
            </Text>
        </CardBody>
    )
}

function CardGrid() {
    return (
        <Grid templateColumns='repeat(6, 1fr)' gap={6} align='stretch'>
            <GridItem colSpan={2} bg=''>
                <Tooltip placement='top' label='Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut, consectetuer adipiscing elit.'
                    hasArrow bg='#c6a779' color='white' rounded='xl'>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' color='#c6a799'
                        _hover={{
                            cursor: 'pointer'
                        }}
                    >
                        <CardBody>
                            <Heading size='lg'>MISSION</Heading>
                            <Text fontSize='xs'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </Text>
                        </CardBody>
                        <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }}
                            src='../../../../../public/imgs/icons/council/mission.jpg' alt='Mission' />
                    </Card>
                </Tooltip>
            </GridItem>
            <GridItem colSpan={2} bg=''>
                <Tooltip placement='top' label='Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut, consectetuer adipiscing elit.'
                    hasArrow bg='#c6a779' color='white' rounded='xl'>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' color='#c6a799'
                        _hover={{
                            cursor: 'pointer'
                        }}
                    >

                        <CardBody>
                            <Heading size='lg'>VISION</Heading>
                            <Text fontSize='xs'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </Text>
                        </CardBody>
                        <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }}
                            src='../../../../../public/imgs/icons/council/vision.jpg' alt='Vision' />
                    </Card>
                </Tooltip>
            </GridItem>
            <GridItem colSpan={2} bg=''>
                <Tooltip placement='top' label='Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut, consectetuer adipiscing elit.'
                    hasArrow bg='#c6a779' color='white' rounded='xl'>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' color='#c6a799'
                        _hover={{
                            cursor: 'pointer'
                        }}
                    >

                        <CardBody>
                            <Heading size='lg'>VALUES</Heading>
                            <Text fontSize='xs'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </Text>
                        </CardBody>
                        <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }}
                            src='../../../../../public/imgs/icons/council/value.jpg' alt='Values' />
                    </Card>
                </Tooltip>
            </GridItem>
        </Grid>
    )
}
export default Council
