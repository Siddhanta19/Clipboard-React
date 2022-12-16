import React from "react";
import {
	ChakraProvider,
	Box,
	Text,
	Link,
	VStack,
	Code,
	Grid,
	theme,
	Button,
	useColorMode,
} from "@chakra-ui/react";

import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Features from "./Components/Features";
import Download from "./Components/Download";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import { Slide } from "react-awesome-reveal";

//
function App() {
	return (
		<ChakraProvider theme={theme}>
			<Box pos={"relative"} overflowX="hidden">
				<Box
					position={"absolute"}
					left={{ base: "50%", md: null }}
					right={{ md: "0" }}
					top={"10%"}></Box>
				<Slide cascade damping={1.2} triggerOnce>
					<Header />
					<Intro />
				</Slide>

				<Slide direction="right" triggerOnce fraction={0.2}>
					<Features />
				</Slide>

				<Download />
				<Faq />
				<Footer />
			</Box>
		</ChakraProvider>
	);
}

export default App;
