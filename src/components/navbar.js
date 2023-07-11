import { Flex, Heading } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import Link from "next/link";
import React from "react";
import Image from 'next/image'

const NavBar = () => {
    const theme = useTheme();

    return (
        <Flex
            w="full"
            bgColor={theme.colors.primary}
            shadow="2xl"
            p={3}
            color="white"
            justify="space-between"
            align='center'
        >
            <Link href="/" >
                <Heading as="h1" size="lg" color={theme.colors.secondary} display='flex' justifyContent='center'>
                    offer<Image
                src="/visa.svg"
                width={70}
                height={70}
                alt="Picture of the author"
            />rd
                </Heading>
            </Link>
            
        </Flex>
    );
};

export default NavBar;
