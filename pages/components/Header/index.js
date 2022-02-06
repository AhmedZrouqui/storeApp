import React, { useState } from 'react';
import NextLink from "next/link"
import {AiOutlineShopping, AiOutlineUser, AiOutlineSearch, AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import {Flex, Box, Text, HStack, Button, VStack} from "@chakra-ui/react"

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        {
          path : "/",
          name: "Home",
          icon: "",
        },
        {
            path : "/new",
            name: "Nouveauté",
            icon: "",
          },
        {
          path : "/men",
          name: "Homme",
          icon: "",
        },
        {
          path : "/women",
          name: "Femme",
          icon: "",
        },
        {
          path : "/sales",
          name: "Soldes",
          icon: "",
        },
      ]

    return (
        <VStack borderBottom="1px solid" borderColor="supple">
            <HStack align="center" justify="space-between" w="100%" py={2} mt={2}>
                <Flex display={["none","none", "flex", "flex"]}>
                    <Button variant="icon">
                        <AiOutlineSearch />
                    </Button>
                </Flex>
                <Flex display={["flex","flex", "none", "none"]}>
                    <Button variant="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ?
                            <AiOutlineClose />
                            :
                            <AiOutlineMenu />
                        }
                    </Button>
                </Flex>
                <Flex>
                    <Text variant='logo'>
                        Watches
                    </Text>
                </Flex>
                <Flex>
                    <Button px={2} variant="icon">
                    <AiOutlineShopping />
                    </Button>
                    <Button px={2} variant="icon">
                    <AiOutlineUser />
                    </Button>
                </Flex>
            </HStack>
            <HStack pb={5} justify="space-between" display={["none","none", "flex", "flex"]}>
                <Flex >
                    {
                    navigation.map((nav, i) => 
                        <NextLink key={i} href={nav.path} passHref>
                        <Button px={5} variant="ghost">
                                {nav.name}
                        </Button>
                        </NextLink>
                        
                    )
                    }
                </Flex>
            </HStack>
            <Flex w= "100vw"
                h= 'calc(100vh - 40px)'
                bg= 'offWhite'
                zIndex= {20}
                pos="fixed"
                top= "60px"
                left="0"
                display={[`${isMenuOpen ? "flex" : "none"}`, `${isMenuOpen ? "flex" : "none"}`, "none", "none"]}
                justify="center"
                overflowY= 'auto'
                flexDir= "column">
                <Flex flexDir="column">
                    
                    {
                    navigation.map((nav, i) => 
                        <NextLink key={i} href={nav.path} passHref>
                        <Button py={8} variant="ghost">
                                {nav.name}
                        </Button>
                        </NextLink>
                        
                    )
                    }
                </Flex>
            </Flex>
        </VStack>
    );
}

export default Header;
