import { Box, Progress } from "@chakra-ui/react";
import { useState } from "react";

const ScoreProgressBar = ({score}) => {
  return (
    <Box w="100%" maxW="400px">
      <Progress
        value={score}
        borderRadius="full"
        size="sm"
        colorScheme="teal"
        bg="gray.200"
        rounded="full"
      />
    </Box>
  );
};

export default ScoreProgressBar;
