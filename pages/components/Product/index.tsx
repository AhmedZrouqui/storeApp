import React from 'react';
import NextImage from 'next/image';
import { Flex } from '@chakra-ui/react';

function Product(props: any) {
    const {productId, pName, pPrice, pDescription, pImage} = props


    return (
        <Flex cursor="pointer" mx="20px">
            <NextImage src={pImage} alt={pName}/>
        </Flex>
    );
}

export default Product;
