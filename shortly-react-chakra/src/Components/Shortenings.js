import {
	Box,
	Button,
	Flex,
	Image,
	Text,
	Tabs,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	VStack,
} from "@chakra-ui/react";
import React from "react";

/* import illustration1 from "../images/illustration-features-tab-1.svg"; */

export default function Shortenings(props) {
	return (
		<Box mb={"20"} p={"5"} mx={"auto"} id="ShorteningsSection">
			<Flex flexDir={"column"} gap={"10"}>
				<Text
					letterSpacing={"wider"}
					textAlign={"center"}
					fontSize={"3xl"}
					fontWeight={"bold"}
				>
					Shorten Up
				</Text>

				{/* Shorten it Form */}

				<FormControl
					isRequired
					borderRadius={"xl"}
					p={"10"}
					bgColor={"blackAlpha.700"}
				>
					<VStack spacing={"5"}>
						<Input
							_placeholder={{ color: "gray" }}
							placeholder="Shorten a link here"
							type="email"
						/>
						<Button type="submit" w={"full"} colorScheme={"linkedin"}>
							Shorten it!
						</Button>
					</VStack>
				</FormControl>

				{/* Link 1 */}

				<VStack
					fontWeight={"bold"}
					borderRadius={"xl"}
					p={"5"}
					bgColor={"blackAlpha.500"}
				>
					<Text>https://frontendmentor.io</Text>
					<Text color={"cyan.300"}>https://rel.ink/k4IKyk</Text>
					<Button px={"5"} type="submit" colorScheme={"linkedin"}>
						Copy
					</Button>
				</VStack>
				{/* Link 2 */}

				<VStack
					fontWeight={"bold"}
					borderRadius={"xl"}
					p={"5"}
					bgColor={"blackAlpha.500"}
				>
					<Text>https://frontendmentor.io</Text>
					<Text color={"cyan.300"}>https://rel.ink/gxOxp9</Text>
					<Button px={"5"} type="submit" colorScheme={"linkedin"}>
						Copy
					</Button>
				</VStack>
				{/* Link 3 */}

				<VStack
					fontWeight={"bold"}
					borderRadius={"xl"}
					p={"5"}
					bgColor={"blackAlpha.500"}
				>
					<Text>https://frontendmentor.io</Text>
					<Text color={"cyan.300"}>https://rel.ink/goB3x9</Text>
					<Button px={"5"} type="submit" colorScheme={"linkedin"}>
						Copy
					</Button>
				</VStack>
			</Flex>
		</Box>
	);
}
