import { useState } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Divider,
    Heading,
    Flex,
    IconButton,
    Tag,
    TagLabel,
    TagCloseButton,
    HStack,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { AddIcon } from "@chakra-ui/icons";
import axios from "axios";

export default function CreateOffer() {
    const theme = useTheme();

    const [formData, setFormData] = useState({
        merchantId: "",
        merchantLocation: "",
        offer_title: "",
        inclusionTags: [],
        otherTags: [],
        offerDescription: "",
        rewardsDescription: "",
    });
    const [otherTagText, setOtherTagText] = useState("");
    const [inclusionTagText, setInclusionTagText] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleInclusionTagChange = (e) => {
        setInclusionTagText(e.target.value);
    };
    const handleOtherTagChange = (e) => {
        setOtherTagText(e.target.value);
    };

    const handleAddTag = (tagName, tagValue) => {
        if (tagValue.length == 0) return;
        setFormData((prevData) => ({
            ...prevData,
            [tagName]: [...formData[tagName], tagValue],
        }));
        tagName == "inclusionTags"
            ? setInclusionTagText("")
            : setOtherTagText("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Prepare the payload data
        const payload = {
            merchant_id: 2,
            merchant_name: "Naruto",
            merchant_location: "Los Angeles",
            inclusion_tags: formData.inclusionTags,
            other_tags: formData.otherTags,
            offer_description: formData.offerDescription,
            rewards_description: formData.rewardsDescription,
            offer_title: formData.offerTitle,
            enabled: false,
        };

        // Send the payload to the API endpoint
        axios
            .post("https://close2me-service.onrender.com/offers/", payload)
            .then((response) => {
                console.log("Offer created successfully");
                console.log(response.data);
                // Reset form data
                setFormData({
                    offerTitle: "",
                    merchantId: "",
                    merchantLocation: "",
                    inclusionTags: [],
                    otherTags: [],
                    offerDescription: "",
                    rewardsDescription: "",
                });
            })
            .catch((error) => {
                console.error("Error creating merchant:", error);
            });
    };

    return (
        <Box p={5} shadow="xl" m={3}>
            <Heading>Upload Your Offer</Heading>
            <Divider w="inherit" mt={3} mb={3} />
            <form onSubmit={handleSubmit}>
                <FormControl id="offerTitle" mb={4}>
                    <FormLabel>Offer Title</FormLabel>
                    <Input
                        variant="filled"
                        name="offerTitle"
                        value={formData.offerTitle || ""}
                        onChange={handleChange}
                        required
                    />
                </FormControl>
                <FormControl id="offerDescription" mb={4}>
                    <FormLabel>Offer Description</FormLabel>
                    <Textarea
                        variant="filled"
                        name="offerDescription"
                        value={formData.offerDescription}
                        onChange={handleChange}
                        required
                    />
                </FormControl>
                <FormControl id="rewardsDescription" mb={4}>
                    <FormLabel>Rewards Description</FormLabel>
                    <Textarea
                        name="rewardsDescription"
                        variant="filled"
                        value={formData.rewardsDescription}
                        onChange={handleChange}
                        required
                    />
                </FormControl>
                <FormControl id="inclusionTags" mb={4}>
                    <FormLabel>Inclusion Tags</FormLabel>
                    <HStack spacing={4} pb={3}>
                        {formData.inclusionTags.map((tag) => (
                            <Tag
                                size="md"
                                key={tag}
                                borderRadius="full"
                                variant="solid"
                                colorScheme="green"
                            >
                                <TagLabel>{tag}</TagLabel>
                                <TagCloseButton />
                            </Tag>
                        ))}
                    </HStack>
                    <Flex>
                        <Input
                            type="text"
                            variant="filled"
                            name="inclusionTags"
                            value={inclusionTagText}
                            onChange={handleInclusionTagChange}
                        />
                        <IconButton
                            ml={3}
                            bgColor={theme.colors.secondary}
                            icon={
                                <AddIcon
                                    color={theme.colors.primary}
                                    onClick={() =>
                                        handleAddTag(
                                            "inclusionTags",
                                            inclusionTagText
                                        )
                                    }
                                />
                            }
                        />
                    </Flex>
                </FormControl>
                <FormControl id="otherTags" mb={4}>
                    <FormLabel>Other Tags</FormLabel>
                    <HStack spacing={4} pb={3}>
                        {formData.otherTags.map((tag) => (
                            <Tag
                                size="md"
                                key={tag}
                                borderRadius="full"
                                variant="solid"
                                colorScheme="green"
                            >
                                <TagLabel>{tag}</TagLabel>
                                <TagCloseButton />
                            </Tag>
                        ))}
                    </HStack>
                    <Flex>
                        <Input
                            type="text"
                            name="otherTags"
                            variant="filled"
                            value={otherTagText}
                            onChange={handleOtherTagChange}
                        />
                        <IconButton
                            ml={3}
                            bgColor={theme.colors.secondary}
                            icon={
                                <AddIcon
                                    color={theme.colors.primary}
                                    onClick={() =>
                                        handleAddTag("otherTags", otherTagText)
                                    }
                                />
                            }
                        />
                    </Flex>
                </FormControl>
                <Button type="submit" bg={theme.colors.secondary} w="full">
                    Create Offer
                </Button>
            </form>
        </Box>
    );
}
