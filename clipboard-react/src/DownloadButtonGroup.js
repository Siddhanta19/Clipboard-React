import {
	ChakraProvider,
	Stack,
	ButtonGroup,
	Button,
	Box,
} from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";
import React from "react";

function Buttons() {
	return (
		<ChakraProvider theme={theme}>
			<Stack
				mb={"30"}
				display="flex"
				direction={{ base: "column", md: "row" }}
				justifyContent={"center"}
				spacing={["6"]}
				width={"full"}
			>
				<Button
					variant={"solid"}
					size={{ base: "md" }}
					height={{ base: "16" }}
					colorScheme={"green"}
					borderRadius={"100vmin"}
					fontSize={["lg", "xl", "2xl"]}
				>
					Download for iOS
				</Button>
				<Button
					size={{ base: "lg" }}
					height={{ base: "16" }}
					colorScheme={"twitter"}
					borderRadius={"100vmin"}
					fontSize={["lg", "xl", "2xl"]}
				>
					Download for Mac
				</Button>
			</Stack>
		</ChakraProvider>
	);
}

export default Buttons;
