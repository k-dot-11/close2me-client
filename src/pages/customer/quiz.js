import ScoreProgressBar from "@/components/scorebar";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(40);

  const quizData = [
    {
      question: "Diwali is celebrated to commemorate the return of which Hindu god from exile?",
      options: ["Lord Rama", "Lord Krishna", "Lord Shiva", "Goddess Lakshmi"],
      answer: "Lord Rama",
    },
    {
      question: "Eid-ul-Fitr marks the end of which Islamic holy month?",
      options: ["Ramadan", "Hajj", "Muharram", "Shawwal"],
      answer: "Ramadan",
    },
  ];

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Seasonal Quiz</Heading>
      <ScoreProgressBar score={score} />
      {currentQuestion < quizData.length ? (
        <VStack spacing={4} align="stretch" mt={4}>
          <Text>{quizData[currentQuestion].question}</Text>
          {quizData[currentQuestion].options.map((option) => (
            <Button
              key={option}
              variant="outline"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </Button>
          ))}
        </VStack>
      ) : (
        <Text>Quiz Completed! Your score: {score}</Text>
      )}
    </Box>
  );
};

export default QuizPage;
