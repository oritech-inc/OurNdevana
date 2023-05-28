import React, {useDisclosure} from 'react'
import {
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay,
    DrawerContent, DrawerCloseButton,
} from '@chakra-ui/react'

function DrawerUI() {
    const { isOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('bottom')

    return (
        <>
            <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerUI
