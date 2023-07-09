import { DragHandleIcon, EditIcon, InfoIcon, StarIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import Link from "next/link";

export default function Home() {
    const theme = useTheme();
    return (
        <Flex
            flexDirection="column"
            align="center"
            p={3}
            width="full"
            justify="space-between"
            height="100vh"
        >
            <Box>
                <Heading>Hello there</Heading>
                <SimpleGrid columns={2} spacing={8} mt={10}>
                    <Link href="merchant/currentoffers">
                        <Flex
                            flexDirection="column"
                            align="center"
                            p={3}
                            shadow="md"
                            borderRadius="lg"
                            bg="gray.100"
                        >
                            <StarIcon m={3} color={theme.colors.secondary} />
                            <Text>Current Offers</Text>
                        </Flex>
                    </Link>
                    <Link href="merchant/createoffer">
                        <Flex
                            flexDirection="column"
                            align="center"
                            p={3}
                            shadow="md"
                            borderRadius="lg"
                            bg="gray.100"
                        >
                            <EditIcon m={3} color={theme.colors.secondary} />
                            <Text>Create Offer</Text>
                        </Flex>
                    </Link>
                    <Link href="merchant/insights">
                        <Flex
                            flexDirection="column"
                            align="center"
                            p={3}
                            shadow="md"
                            borderRadius="lg"
                            bg="gray.100"
                        >
                            <InfoIcon m={3} color={theme.colors.secondary} />
                            <Text>Visa Insights</Text>
                        </Flex>
                    </Link>
                    <Link href="customer">
                        <Flex
                            flexDirection="column"
                            align="center"
                            p={3}
                            shadow="md"
                            borderRadius="lg"
                            bg="gray.100"
                        >
                            <ViewIcon
                                m={3}
                                color={theme.colors.secondary}
                            />
                            <Text>Customer View</Text>
                        </Flex>
                    </Link>
                </SimpleGrid>
            </Box>
            <Text mb={10}>Powered by Visa Inc.</Text>
        </Flex>
    );
}
