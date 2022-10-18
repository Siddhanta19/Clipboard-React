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

import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";



export default function Download(props) {
	return (
		<Box mb={"28"} p={"5"} mx={"auto"} id="Download">
			<Text mb={"5"} textAlign={"center"} fontSize={"2xl"} fontWeight={"bold"}>
				Download The Extension
			</Text>
			<Text color={"messenger.50"} letterSpacing="wide" textAlign={"center"}>
				We have got more browsers in the pipeline. Please, Do let us know if
				you've got a favorite you'd like us to prioritize.
			</Text>

			<Stack
				mt={"28"}
				gap={"20"}
				justifyContent={"center"}
				alignItems={"center"}
				flexDir={{ base: "column", md: "row" }}
			>
				<Flex gap={"5"} alignItems={"center"} flexDir={"column"} id="Chrome">
					<Image src={chrome}></Image>
					<Flex gap={"5"} flexDir={"column"}>
						<Text textAlign={"center"} fontSize={"2xl"} fontWeight={"bold"}>
							Add to Chrome
						</Text>
						<Text
							color={"messenger.50"}
							letterSpacing="wide"
							textAlign={"center"}
						>
							Minimum Version 62
						</Text>
						<Divider />
						<Button py={"8"} px={"8"} fontSize={"xl"} colorScheme={"blue"}>
							Add & Install Extension
						</Button>
					</Flex>
				</Flex>

				{/* Firefox on the move */}

				<Flex gap={"5"} alignItems={"center"} flexDir={"column"} id="Firefox">
					<Image src={firefox}></Image>
					<Flex gap={"5"} flexDir={"column"}>
						<Text textAlign={"center"} fontSize={"2xl"} fontWeight={"bold"}>
							Add to Firefox
						</Text>
						<Text
							color={"messenger.50"}
							letterSpacing="wide"
							textAlign={"center"}
						>
							Minimum Version 55
						</Text>
						<Divider />
						<Button py={"8"} px={"8"} fontSize={"xl"} colorScheme={"blue"}>
							Add & Install Extension
						</Button>
					</Flex>
				</Flex>

				{/* Opera on the move */}

				<Flex gap={"5"} alignItems={"center"} flexDir={"column"} id="Firefox">
					<Image src={opera}></Image>
					<Flex gap={"5"} flexDir={"column"}>
						<Text textAlign={"center"} fontSize={"2xl"} fontWeight={"bold"}>
							Add to Opera
						</Text>
						<Text
							color={"messenger.50"}
							letterSpacing="wide"
							textAlign={"center"}
						>
							Minimum Version 46
						</Text>
						<Divider />
						<Button py={"8"} px={"8"} fontSize={"xl"} colorScheme={"blue"}>
							Add & Install Extension
						</Button>
					</Flex>
				</Flex>
			</Stack>
		</Box>
	);
}
