import React from 'react';
import { Flex, Text, VStack } from '@chakra-ui/react'
import heroImage from "../../../public/hero_img.jpg"
import NextImage from 'next/image';

function Hero() {
  return (
      <Flex width="100%" mt={5} justify="space-between">
        <Flex maxH="700px" maxW="100%" justify="flex-end">
            <NextImage src={heroImage} alt="hero-image" objectFit='cover'/>
        </Flex>
        
      </Flex>
  );
}

export default Hero;
