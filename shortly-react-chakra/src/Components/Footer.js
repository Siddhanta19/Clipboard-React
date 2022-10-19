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

import logoLight from "../images/logo.svg";
import logoDark from "../images/logo.svg";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer(props) {
	const logo = useColorModeValue(logoLight, logoDark);
	return (
		<Box>
			<Box>
				<Flex
					px={"10"}
					py={"20"}
					bgColor={"gray.700"}
					alignItems={"center"}
					gap={"5"}
					textAlign={"center"}
					flexDir={"column"}
				>
					<Text fontWeight={"bold"} fontSize={"2xl"} lineHeight="1.3">
						Boost your links today
					</Text>

					<Button
						fontWeight={"bold"}
						py={"6"}
						px={"5"}
						fontSize={"md"}
						borderRadius={"full"}
						size={"sm"}
						colorScheme={"messenger"}
						textTransform={"capitalize"}
					>
						Get Started
					</Button>
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
