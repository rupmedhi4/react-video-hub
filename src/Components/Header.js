import React from 'react';
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, VStack, useDisclosure } from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Header() {
    const {isOpen, onOpen, onClose} =useDisclosure();
  return (
    <>
      <Button
      pos={"fixed"}
      left={"4"}
      top={"4"}
      colorScheme='purple'
      p={"0"}
      w={"10"}
      borderRadius={"full"}
      onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"}/>
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>VIDEO HUB</DrawerHeader>
            <DrawerBody>
                <VStack>
                    <Button variant={"ghost"} colorScheme='purple'>
                        <Link to="/">Home</Link>
                    </Button>
                    <Button variant={"ghost"} colorScheme='purple'>
                        <Link to="/videos">Videos</Link>
                    </Button>
                    <Button variant={"ghost"} colorScheme='purple'>
                        <Link to="/videos?category=free">Free Videos</Link>
                    </Button>
                    <Button variant={"ghost"} colorScheme='purple'>
                        <Link to="/upload">Upload Video</Link>
                    </Button>
                 
                </VStack>
            </DrawerBody>
             
        </DrawerContent>
          
      </Drawer>
    </>
  );
}
