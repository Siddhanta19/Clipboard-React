import {
	Box,
	Button,
	Divider,
	Flex,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";

import brandRecognition from "../images/icon-brand-recognition.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import fullCustomize from "../images/icon-fully-customizable.svg";

export default function AdvancedStats(props) {
	return (
		<Box id="AdvancedStats" p={"5"} mx={"auto"}>
			<Flex flexDir={{ base: "column" }} gap="5" mb={"28"} textAlign="center">
				<Text fontSize={"2xl"} fontWeight={"bold"}>
					Advanced Statistics
				</Text>
				<Text color={"messenger.50"} letterSpacing="wide">
					Track how your links are performing accross the web with our advanced
					statistics dashboard.
				</Text>
			</Flex>

			<Flex flexDir={"column"} gap={"10"}>
				<Flex
					borderRadius={"xl"}
					bgColor={"gray.700"}
					gap={"5"}
					p="10"
					alignItems={"center"}
					flexDir={"column"}
				>
					<Image src={brandRecognition}></Image>

					<Text textAlign={"center"} fontSize={"xl"} fontWeight={"bold"}>
						Brand Recognition
					</Text>
					<Text
						color={"messenger.50"}
						letterSpacing="wide"
						textAlign={"center"}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae
						nemo corporis accusamus assumenda quaerat, quis ab quae
						reprehenderit tempore.
					</Text>
				</Flex>
				<Flex
					borderRadius={"xl"}
					bgColor={"gray.700"}
					gap={"5"}
					p="10"
					alignItems={"center"}
					flexDir={"column"}
				>
					<Image src={detailedRecords}></Image>

					<Text textAlign={"center"} fontSize={"xl"} fontWeight={"bold"}>
						Detailed Records
					</Text>
					<Text
						color={"messenger.50"}
						letterSpacing="wide"
						textAlign={"center"}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae
						nemo corporis accusamus assumenda quaerat, quis ab quae
						reprehenderit tempore.
					</Text>
				</Flex>
				<Flex
					borderRadius={"xl"}
					bgColor={"gray.700"}
					gap={"5"}
					p="10"
					alignItems={"center"}
					flexDir={"column"}
				>
					<Image src={fullCustomize}></Image>

					<Text textAlign={"center"} fontSize={"xl"} fontWeight={"bold"}>
						Fully Customizable
					</Text>
					<Text
						color={"messenger.50"}
						letterSpacing="wide"
						textAlign={"center"}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae
						nemo corporis accusamus assumenda quaerat, quis ab quae
						reprehenderit tempore.
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
}
