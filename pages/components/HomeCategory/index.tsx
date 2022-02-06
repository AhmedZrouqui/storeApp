import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

function HomeCategory({sectionTitle, sectionLink}) {
    return(
        <Flex justify="space-between" mt={20} mb={10}>
            <Text variant="h4" fontFamily="Kanit" fontWeight="500">
                {sectionTitle}
            </Text>
            <NextLink href={sectionLink}>
                <Text variant="link">
                    Tout voir
                </Text>
            </NextLink>
        </Flex>
    );
}

export default HomeCategory;
