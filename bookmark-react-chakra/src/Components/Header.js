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
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalFooter,
} from "@chakra-ui/react";
// Importing header icons

import logoLight from "../images/logo-bookmark.svg";
import logoDark from "../images/logo-bookmark-Dark.svg";
import { FaBars } from "react-icons/fa";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Fade, Slide } from "react-awesome-reveal";

export default function Header(props) {
	const logo = useColorModeValue(logoLight, logoDark);
	const { isOpen, onOpen, onClose } = useDisclosure();

	// logo = logoLight in lightmode and logoDark in darkmode
	return (
		<Flex
			id="Header"
			p="10"
			mx={"auto"}
			gap={"44"}
			alignItems={"center"}
			justifyContent={"space-around"}>
			<Image src={logo} w={{ base: "56" }} h={{ md: "min-content" }} />

			{/* Menu on desktop*/}
			<Flex
				display={{ base: "none", md: "flex" }}
				alignItems={"center"}
				gap={"10"}
				fontSize={"xl"}
				letterSpacing={"widest"}
				/* 				fontWeight={"semibold"}
				 */
				direction={{ base: "row" }}
				textTransform={"uppercase"}>
				<ColorModeSwitcher />
				<Text>Features</Text>
				<Text>Download</Text>
				<Text>Faq</Text>
				<Button
					size={"lg"}
					fontSize={"xl"}
					letterSpacing={"wider"}
					colorScheme={"blue"}
					textTransform={"uppercase"}>
					Login
				</Button>
			</Flex>

			{/* Menu on Mobile */}
			<Box fontSize={"2xl"} display={{ md: "none" }}>
				<Icon as={FaBars} cursor="pointer" onClick={onOpen} />
				<Modal isOpen={isOpen} onClose={onClose} id="hamburgerItems">
					<ModalOverlay />
					<ModalContent>
						<ModalHeader></ModalHeader>
						<ModalCloseButton />
						<VStack
							alignItems={"center"}
							justifyContent={"center"}
							spacing={"4"}
							letterSpacing={"wider"}
							fontSize={"xl"}
							textTransform={"uppercase"}>
							<ColorModeSwitcher />
							<Text>Features</Text>
							<StackDivider />
							<Text>Download</Text>
							<StackDivider />
							<Text>FAQ</Text>
							<StackDivider />
							<Text>Login</Text>
						</VStack>
						<ModalFooter></ModalFooter>
					</ModalContent>
				</Modal>
			</Box>
		</Flex>
	);
}
