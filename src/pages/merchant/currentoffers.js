import {
    Divider,
    Flex,
    HStack,
    Heading,
    Switch,
    Tag,
    TagLabel,
    Text,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import axios from "axios";
import React, { useState } from "react";

const CurrentOffers = ({ offers }) => {
    const theme = useTheme();
    const [offersData, setOffersData] = useState(offers);

    const handleSwitchChange = async (offer, checked, index) => {
        offer.enabled = checked ? 1 : 0;
        axios.put(`http://localhost:8000/offers/${offer.offer_id}`, { offer });
        let updatedOffersData = [...offersData];
        updatedOffersData[index].enabled = checked ? 1 : 0;
        setOffersData(updatedOffersData);
    };

    return (
        <Flex flexDirection="column" p={3}>
            <Heading mb={4}>Current Offers</Heading>
            <Divider />
            {offersData.map((offer, index) => {
                return (
                    <Flex
                        key={offer.offer_id}
                        flexDirection="column"
                        shadow="xl"
                        borderRadius="xl"
                        m={3}
                        p={3}
                    >
                        <Heading size="sm">{offer.offer_title}</Heading>
                        <Divider my={2} />
                        <Flex w="full" justify="space-between" align="center">
                            <HStack spacing={3} my={3}>
                                {offer.inclusion_tags.map((tag) => {
                                    return (
                                        <Tag
                                            size="md"
                                            key={tag}
                                            borderRadius="full"
                                            variant="solid"
                                            bgColor={theme.colors.secondary}
                                        >
                                            <TagLabel>{tag}</TagLabel>
                                        </Tag>
                                    );
                                })}
                            </HStack>
                            <Switch
                                ringColor={theme.colors.secondary}
                                size="md"
                                isChecked={offer.enabled == 1}
                                onChange={(e) => {
                                    handleSwitchChange(
                                        offer,
                                        e.target.checked,
                                        index
                                    );
                                    offer.enabled = e.target.checked ? 1 : 0;
                                }}
                            />
                        </Flex>
                        <Text>{offer.offer_description}</Text>
                    </Flex>
                );
            })}
        </Flex>
    );
};

export async function getServerSideProps() {
    try {
        const response = await axios.get("http://localhost:8000/offers");
        const offers = response.data;

        return {
            props: {
                offers,
            },
        };
    } catch (error) {
        console.error("Error fetching offers:", error);
        return {
            props: {
                offers: [],
            },
        };
    }
}

export default CurrentOffers;