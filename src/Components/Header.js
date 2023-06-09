import React from 'react';
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Header() {
    const {isOpen, onOpen, onClose} =useDisclosure();
  return (
    <>
      <Button
      zIndex={'overlay'}
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
            <DrawerBody >
                <VStack alignItems={'flex-start'}>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                        <Link to="/">Home</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                        <Link to="/videos">Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                        <Link to="/videos?category=free">Free Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                        <Link to="/upload">Upload Video</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                        <Link to="/login">Login</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                        <Link to="/signup">SignUp</Link>
                    </Button>
                 
                </VStack>

                <HStack pos={"absolute"} bottom={"10"} left={"0"}  w={"full"} justifyContent={'space-evenly'}>
                    <Button onClick={onClose} colorScheme='purple'>
                        <Link>Log in</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple' variant={"outline"}>
                        <Link>Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
             
        </DrawerContent>
          
      </Drawer>
    </>
  );
}
