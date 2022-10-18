import React, { useState } from "react";

import {
	Text,
	Box,
	Image,
	Stack,
	useColorModeValue,
	Button,
	Flex,
	Icon,
	VStack,
	StackDivider,
} from "@chakra-ui/react";
// Importing header icons

import logoLight from "../images/logo-bookmark.svg";
import logoDark from "../images/logo-bookmark-Dark.svg";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header(props) {
	const logo = useColorModeValue(logoLight, logoDark);
	const [displayValue, setDisplayValue] = useState("none");
	function changeDisplayValue() {
		setDisplayValue((displayValue) => "block");
	}
	// logo = logoLight in lightmode and logoDark in darkmode
	return (
		<Flex
			id="Header"
			p="10"
			mx={"auto"}
			gap={"44"}
			alignItems={"center"}
			justifyContent={"space-around"}
		>
			<Image src={logo} w={{ base: "56" }} h={{ md: "min-content" }} />

			<Flex
				display={{ base: "none", md: "flex" }}
				alignItems={"center"}
				gap={"10"}
				fontSize={"xl"}
				letterSpacing={"widest"}
				/* 				fontWeight={"semibold"}
				 */
				direction={{ base: "row" }}
				textTransform={"uppercase"}
			>
				<Text>Features</Text>
				<Text>Download</Text>
				<Text>Faq</Text>
				<Button
					size={"lg"}
					fontSize={"xl"}
					letterSpacing={"wider"}
					colorScheme={"blue"}
					textTransform={"uppercase"}
				>
					Login
				</Button>
			</Flex>

			<Box fontSize={"2xl"} display={{ md: "none" }}>
				<Icon as={GiHamburgerMenu} onClick={changeDisplayValue} />
				<Box
					pos={"fixed"}
					inset="0"
					w={"full"}
					h={"full"}
					p="20"
					id="hamburgerItems"
					display={displayValue}
				>
					<VStack /* width={"full"} */>
						<Text>Features</Text>
						<StackDivider />
						<Text>Download</Text>
						<StackDivider />
						<Text>FAQ</Text>
						<StackDivider />
						<Text>Login</Text>
					</VStack>
				</Box>
			</Box>
		</Flex>
	);
}
