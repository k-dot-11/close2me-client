import {
    Box,
    Divider,
    Flex,
    HStack,
    Heading,
    Switch,
    Tag,
    TagLabel,
    Text,
    Tooltip,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import axios from "axios";
import { getPreciseDistance } from "geolib";
import React, { useState } from "react";
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import { InfoIcon, InfoOutlineIcon } from "@chakra-ui/icons";

const Home = ({ offers }) => {
    const theme = useTheme();
    const [sliderValue, setSliderValue] = useState(300);
    const [showTooltip, setShowTooltip] = useState(false);

    let visaOfficeLocation = {
        latitude: 12.9835579,
        longitude: 77.6940943,
    };

    return (
        <Flex flexDirection="column" p={3}>
            <Heading mb={4}>Current Offers</Heading>
            <Divider />
            <Heading pt={3} size="sm">
                Set Distance - {sliderValue}m
            </Heading>
            <Flex align='center' py={2}>
                <InfoOutlineIcon mr = {3} boxSize='3' />
                <Text fontSize='xs'> 0 means no limit on distance</Text>
            </Flex>
            <Slider
                aria-label="slider-ex-1"
                defaultValue={300}
                min={0}
                max={3000}
                onChange={(v) => setSliderValue(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onTouchMove={() => setShowTooltip(true)}
                onTouchEnd={() => setShowTooltip(false)}
            >
                <SliderTrack>
                    <SliderFilledTrack bgColor={theme.colors.primary} />
                </SliderTrack>
                <Tooltip
                    hasArrow
                    bg="teal.500"
                    color="white"
                    placement="top"
                    isOpen={showTooltip}
                    label={`${sliderValue}m`}
                >
                    <SliderThumb
                        border="1px"
                        borderColor={theme.colors.primary}
                    />
                </Tooltip>
            </Slider>
            {offers.map((offer, index) => {
                let distanceFromOrigin = getPreciseDistance(
                    {
                        latitude: offer.merchant_latitude,
                        longitude: offer.merchant_longitude,
                    },
                    visaOfficeLocation
                );
                if (distanceFromOrigin > sliderValue && sliderValue != 0) return;
                return (
                    <Flex
                        key={offer.offer_id}
                        flexDirection="column"
                        shadow="xl"
                        borderRadius="xl"
                        m={3}
                        p={3}
                    >
                        <Flex justify="space-between">
                            <Heading
                                size="md"
                                py={2}
                                color={theme.colors.primary}
                            >
                                {offer.merchant_name}
                            </Heading>
                            <Text fontWeight="thin">{distanceFromOrigin}m</Text>
                        </Flex>
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
                        </Flex>
                        <Text>{offer.offer_description}</Text>
                        <Accordion allowToggle mt={2}>
                            <AccordionItem p={1}>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            Rewards Description
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {offer.rewards_description}
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem p={1}>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            Accessibility Features
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Flex>
                );
            })}
        </Flex>
    );
};

export async function getServerSideProps() {
    try {
        const response = await axios.get(
            "https://close2me-service.onrender.com/offers"
        );
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

export default Home;
