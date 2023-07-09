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
            <Link href="/">
                <Heading as="h2" size="md" color={theme.colors.secondary}>
                    Close2Me
                </Heading>
            </Link>
            <Image
                src="/visa.svg"
                width={100}
                height={100}
                alt="Picture of the author"
            />
        </Flex>
    );
};

export default NavBar;
