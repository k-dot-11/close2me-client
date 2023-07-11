import {
    Badge,
    Button,
    Divider,
    Flex,
    Heading,
    Tag,
    Text,
} from "@chakra-ui/react";
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
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import LineChart from "@/components/linechart";
import { DoughnutChart } from "@/components/doughnutchart";
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from "@chakra-ui/react";
import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";

const Insights = () => {
    const theme = useTheme();
    return (
        <Flex p={3} flexDirection="column">
            <Heading>
                Insights™ <Badge colorScheme="blue">Premium</Badge>{" "}
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
                <Flex justify="space-around" my={2}>
                    <Button bg={theme.colors.primary} color="white" size="sm">
                        My Offers
                    </Button>
                    <Button bg={theme.colors.secondary} color="white" size="sm">
                        History
                    </Button>
                </Flex>
            </Flex>
            <Flex
                mt={2}
                flexDirection="column"
                p={3}
                shadow="xl"
                borderRadius="xl"
            >
                <Heading size="md">Customer Trends</Heading>
                <Divider my={3} />
                <LineChart />
                <Button
                    mt={4}
                    bg={theme.colors.secondary}
                    color="white"
                    size="sm"
                    alignSelf="center"
                >
                    Expand
                </Button>
            </Flex>
            <Flex
                mt={2}
                flexDirection="column"
                p={3}
                shadow="xl"
                borderRadius="xl"
            >
                <Heading size="md">Trending Offers</Heading>
                <Divider my={3} />
                <TableContainer>
                    <Table variant="striped">
                        <TableCaption>
                            Based on data from last 7 days
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Offer Name</Th>
                                <Th>Redeems</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    Buy 2 get 2 Free on <br /> purchase of
                                    Rs.5000
                                </Td>
                                <Td>66 </Td>
                            </Tr>
                            <Tr>
                                <Td>Try it before you buy it</Td>

                                <Td>42</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    50% Off on any <br /> Cheese Burst Pizza
                                </Td>

                                <Td>33</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
            <Flex
                mt={2}
                flexDirection="column"
                p={3}
                shadow="xl"
                borderRadius="xl"
            >
                <Heading size="md">Your Best Offers</Heading>
                <Divider my={3} />
                <TableContainer>
                    <Table variant="striped">
                        <TableCaption>
                            Based on data from last 7 days
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Offer Name</Th>
                                <Th>Redeems</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Try it before you buy it</Td>

                                <Td>42</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    Get free goodies on <br /> purchases of
                                    Rs.2000
                                </Td>
                                <Td>13 </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    Get gift card worth <br /> Rs.500 with every
                                    watch
                                </Td>
                                <Td>9 </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
            <Flex
                mt={2}
                flexDirection="column"
                p={3}
                shadow="xl"
                borderRadius="xl"
            >
                <Heading size="md">Know your customers</Heading>
                <Divider my={3} />
                <DoughnutChart />
            </Flex>
            <Flex
                mt={2}
                flexDirection="column"
                p={3}
                shadow="xl"
                borderRadius="xl"
            >
                <Heading size="md">Recommended Offers</Heading>
                <Heading size='xs' fontWeight='hairline'>Generated By AI (Experimental)</Heading>
                <Divider my={3} />
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={StarIcon} color="green.500" />
                        Offers giving discount on certain thresholds are more likely to be availed.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color="green.500" />
                        Offers that give percent off instead of quantity bonus are more loved by your customers.
                    </ListItem>
                </List>
            </Flex>
        </Flex>
    );
};

export default Insights;
