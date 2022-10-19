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
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";

import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Shortenings from "./Components/Shortenings";
import Download from "./Components/Download";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";

//
function App() {
	return (
		<ChakraProvider theme={theme}>
			<Box pos={"relative"}>
				<Box
					position={"absolute"}
					left={{ base: "50%", md: null }}
					right={{ md: "0" }}
					top={"10%"}
				>
					{/* <ColorModeSwitcher /> */}
				</Box>
				<Header />
				<Intro />
				<Shortenings />
				<Download />
				<Faq />
				<Footer />
			</Box>
		</ChakraProvider>
	);
}

export default App;
