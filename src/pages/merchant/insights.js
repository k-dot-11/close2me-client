import { Badge, Button, Divider, Flex, Heading, Tag, Text } from "@chakra-ui/react";
import React from "react";
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

const Insights = () => {
    const theme = useTheme()
    return (
        <Flex p={3} flexDirection="column">
            <Heading>
                Insights <Badge colorScheme="blue">Premium</Badge>{" "}
            </Heading>
            <Text fontSize="xs" fontWeight="thin">
                Powered by Visa
            </Text>
            <Divider p={2} />
            <Flex
                mt={2}
                flexDirection="column"
                p={3}
                shadow="xl"
                borderRadius="xl"
            >
                <Heading size="md">Customer Activity</Heading>
                <Divider my={3} />
                <Flex justify="space-around">
                    <Stat>
                        <StatLabel>Current Density</StatLabel>
                        <StatNumber>31</StatNumber>
                        <StatHelpText>Users near you</StatHelpText>
                    </Stat>
                    <Stat>
                        <StatLabel>Predicted Density</StatLabel>
                        <StatNumber>
                            <StatArrow type="increase" />
                            12%
                        </StatNumber>
                        <StatHelpText>In the next hour</StatHelpText>
                    </Stat>
                </Flex>
                <Flex justify='space-around' my={2}>
                    <Button bg={theme.colors.primary} color='white' size='sm'>My Offers</Button>
                    <Button bg={theme.colors.secondary} color='white' size='sm'>History</Button>
                </Flex>
            </Flex>
            <Flex
                mt={2}
                flexDirection="column"
                p={3}
                shadow="xl"
                borderRadius="xl"
            >
                <Heading size="md">Trending Tags</Heading>
                <Divider my={3} />
                <Flex justify="space-around">
                    <Stat>
                        <StatLabel>Current Density</StatLabel>
                        <StatNumber>31</StatNumber>
                        <StatHelpText>Users near you</StatHelpText>
                    </Stat>
                    <Stat>
                        <StatLabel>Predicted Density</StatLabel>
                        <StatNumber>
                            <StatArrow type="increase" />
                            12%
                        </StatNumber>
                        <StatHelpText>In the next hour</StatHelpText>
                    </Stat>
                </Flex>
                <Flex>
                    <Button>My Offers</Button>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Insights;
