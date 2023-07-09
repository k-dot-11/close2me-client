import { Flex, Heading } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import Link from "next/link";
import React from "react";

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
        >
            <Link href="/">
                <Heading size="md" color={theme.colors.secondary}>
                    Close2Me
                </Heading>
            </Link>

        </Flex>
    );
};

export default NavBar;
