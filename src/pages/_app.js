import NavBar from "@/components/navbar";
import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
});

function MyApp({ Component, pageProps }) {
    const visaTheme = {
        colors: {
            primary: "#1a1f71",
            secondary: "#fdbb0a",
        },
        fonts:{
            heading : poppins.style.fontFamily
        }
    };

    return (
        <main className={poppins.className}>
            <ChakraProvider theme={extendTheme(visaTheme)}>
                <Flex flexDirection="column">
                    <NavBar />
                    <Component {...pageProps} />
                </Flex>
            </ChakraProvider>
        </main>
    );
}

export default MyApp;
