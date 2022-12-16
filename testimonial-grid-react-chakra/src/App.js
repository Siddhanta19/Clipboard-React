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
import Intro from "./Components/Intro";
import Main from "./Components/Main";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Box textAlign="center" fontSize="xl">
				<Intro />
				<Main />
			</Box>
		</ChakraProvider>
	);
}

export default App;
