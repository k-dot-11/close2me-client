import React from "react";
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

const FilterBody = () => {
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

    return (
        <Box>
            <form>
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
                    Filter
                </Button>
            </form>
        </Box>
    );
};

export default FilterBody;
