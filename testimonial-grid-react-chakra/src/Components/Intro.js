import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Intro(props) {
	return (
		<Box p={"5"} mx={"auto"} id="IntroSection">
			<Text mb={"10"} textAlign={"center"} fontSize={{base: '3xl'}} fontWeight={"bold"}>
				Testimonial Grid Component
			</Text>
		</Box>
	);
}
