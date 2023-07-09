import NavBar from "@/components/navbar";
import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {

    const visaTheme = {
        colors: {
          primary: '#1a1f71',
          secondary: '#fdbb0a',
        },
      };

    return (
        <ChakraProvider theme={extendTheme(visaTheme)}>
            <Flex flexDirection="column">
                <NavBar />
                <Component {...pageProps} />
            </Flex>
        </ChakraProvider>
    );
}

export default MyApp;
