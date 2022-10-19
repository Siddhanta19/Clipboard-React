import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import working from "../images/illustration-working.svg";

export default function Intro(props) {
	return (
		<Box p={"5"} mx={"auto"} id="IntroSection">
			<Image mb={"16"} src={working}></Image>
			<Text mb={"10"} textAlign={"center"} fontSize={"2xl"} fontWeight={"bold"}>
				More than just shorter links
			</Text>
			<Text color={"messenger.50"} letterSpacing="wide" textAlign={"center"}>
				Build your brand's recognition and get detailed insights on how your
				links are performing
			</Text>

			<Center my={"10"} justifyContent={"space-around"}>
				<Button
					fontWeight={"bold"}
					py={"6"}
					size={"sm"}
					colorScheme={"messenger"}
					textTransform={"capitalize"}
				>
					Get Started
				</Button>
			</Center>
		</Box>
	);
}
