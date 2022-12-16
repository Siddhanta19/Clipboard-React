import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";

export default function Faq(props) {
	const textColor = useColorModeValue("messenger.900", "messenger.50");
	return (
		<Box mb={"5"} p={"5"} mx={"auto"} id="Faq">
			<Text mb={"5"} textAlign={"center"} fontSize={"2xl"} fontWeight={"bold"}>
				Frequently Asked Questions
			</Text>
			<Text color={textColor} letterSpacing="wide" textAlign={"center"}>
				Here are some of our FAQs. If you have any other questions you'd like
				answered, please feel free to email us.
			</Text>

			{/* Accordion */}
			<Accordion color={textColor} mt={"10"} allowMultiple>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box
								flex="1"
								textAlign="left"
								fontSize={{ base: "xl", md: "2xl" }}>
								What is Bookmark?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box
								flex="1"
								textAlign="left"
								fontSize={{ base: "xl", md: "2xl" }}>
								How can I request a new browser?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box
								flex="1"
								textAlign="left"
								fontSize={{ base: "xl", md: "2xl" }}>
								Is there a mobile app?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box
								flex="1"
								textAlign="left"
								fontSize={{ base: "xl", md: "2xl" }}>
								What about other chromium browsers?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	);
}
