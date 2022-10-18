import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import hero from "../images/illustration-hero.svg";

export default function Intro(props) {
	return (
		<Box p={"5"} mx={"auto"} id="IntroSection">
			<Image src={hero}></Image>
			<Text mb={"10"} textAlign={"center"} fontSize={"2xl"} fontWeight={"bold"}>
				A Simple Bookmark Manager
			</Text>
			<Text color={"messenger.50"} letterSpacing="wide" textAlign={"center"}>
				A clean and simple interface to organize your favorite websites. Open a
				new browser tab and see your sites load instantly. Try it for free.
			</Text>

			<Flex my={"10"} justifyContent={"space-around"}>
				<Button
					fontWeight={"bold"}
					py={"6"}
					size={"sm"}
					colorScheme={"messenger"}
					textTransform={"capitalize"}
				>
					Get it on chrome
				</Button>
				<Button
					colorScheme={"orange"}
					fontWeight={"bold"}
					py={"6"}
					size={"sm"}
					textTransform={"capitalize"}
				>
					Get it on firefox
				</Button>
			</Flex>
		</Box>
	);
}
