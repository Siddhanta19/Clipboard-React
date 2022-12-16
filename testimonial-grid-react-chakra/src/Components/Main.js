import {
	border,
	Box,
	Flex,
	Grid,
	GridItem,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";

import daniel from "../images/image-daniel.jpg";

import people from "./peopleData";

const gridItems = people().map((person) => {
	const {
		name,
		image,
		role,
		comment,
		story,
		cssProps: { colSpan, rowSpan, borderRadius, bg },
	} = person;

	return (
		<GridItem
			key={name}
			colSpan={{ md: colSpan }}
			borderRadius={borderRadius}
			rowSpan={{ md: rowSpan }}
			bg={bg}
		>
			<Flex flexDir={"column"} gap={"5"} p={"5"}>
				<Flex justifyContent={"left"} alignItems={"center"} gap={"3"}>
					<Image
						src={image}
						borderRadius={"50%"}
						border={"solid 2px white"}
						w={"15%"}
						height="min-content"
					/>
					<Flex
						flexDir={"column"}
						textAlign={"left"}
						letterSpacing={"widest"}
						fontWeight={"semibold"}
						fontSize={"xx-small"}
					>
						<Text>{name}</Text>
						<Text color={"purple.100"}>{role}</Text>
					</Flex>
				</Flex>
				<Flex gap={"7"} flexDir={"column"} textAlign={"left"}>
					<Text fontSize={"sm"} fontWeight="semibold">
						{comment}
					</Text>
					<Text
						fontSize={"sm"}
						color={"purple.100"}
						letterSpacing={"wide"}
						// fontWeight="light"
					>
						{story}
					</Text>
				</Flex>
			</Flex>
		</GridItem>
	);
});

export default function Main(props) {
	return (
		<Grid
			p={{ base: "2", md: "10" }}
			mx="auto"
			templateColumns={{ md: "repeat(4, 1fr)" }}
			gap={6}
		>
			{gridItems}
		</Grid>
	);
}
