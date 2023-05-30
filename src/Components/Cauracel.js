import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assests/1.jpg'
import img2 from '../assests/2.jpg'
import img3 from '../assests/3.jpg'
import img4 from '../assests/4.jpg'
import { Box, Heading } from '@chakra-ui/react';



const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
  };
  

export default function Cauracel() {
  return (
    <>
     <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      interval={1000}
     >
        <Box w={"full"} h={"100vh"} >
            <img src={img1} alt="" />
            <Heading backgroundColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch The Future</Heading>
        </Box>
        <Box w={"full"} h={"100vh"} >
            <img src={img2} alt="" />
            <Heading backgroundColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>  Future is Gaming</Heading>
        </Box>
        <Box w={"full"} h={"100vh"} >
            <img src={img3} alt="" />
            <Heading backgroundColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Gaming on Console</Heading>
        </Box>
        <Box w={"full"} h={"100vh"} >
            <img src={img4} alt="" />
            <Heading backgroundColor={'blackAlpha.600'} color={'white'} {...headingOptions}> Night life is cool</Heading>
        </Box>

     </Carousel>
    </>
  )
}
