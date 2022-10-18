import React from "react";

import {
	Box,
	Button,
	Flex,
	Input,
	Text,
	Image,
	useColorModeValue,
	Icon,
} from "@chakra-ui/react";

import logoLight from "../images/logo-bookmark.svg";
import logoDark from "../images/logo-bookmark-Dark.svg";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer(props) {
	const logo = useColorModeValue(logoLight, logoDark);
	return (
		<Box>
			<Box>
				<Flex
					px={"10"}
					py={"20"}
					bgColor={"blue.600"}
					alignItems={"center"}
					gap={"5"}
					textAlign={"center"}
					flexDir={"column"}
				>
					<Text
						textTransform={"uppercase"}
						letterSpacing={"widest"}
						fontWeight={"semibold"}
						fontSize={"sm"}
					>
						35,000+ already joined
					</Text>

					<Text fontWeight={"bold"} fontSize={"2xl"} lineHeight="1.3">
						Stay up-to-date with what we're doing
					</Text>

					<Input
						bgColor={"blackAlpha.800"}
						placeholder="Enter Your Email Address"
						px={"5"}
						width={"auto"}
					></Input>

					<Button bgColor={"red.500"}> Contact Us</Button>
				</Flex>
			</Box>

			<Box>
				<Box>
					<Flex
						px={"10"}
						py={"20"}
						alignItems={"center"}
						gap={"8"}
						textAlign={"center"}
						flexDir={"column"}
					>
						<Image src={logo} />
						<Flex
							letterSpacing={"widest"}
							color={"gray.500"}
							gap={"5"}
							flexDir={"column"}
						>
							<Text>FEATURES</Text>
							<Text>DOWNLOAD</Text>
							<Text>FAQ</Text>
						</Flex>

						<Flex mt={"10"} gap={"10"} flexDir="row">
							<Icon fontSize={"3xl"} as={FaFacebook} />
							<Icon fontSize={"3xl"} as={FaTwitter} />
						</Flex>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
}
