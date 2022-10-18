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
} from "@chakra-ui/react";
import React from "react";

import illustration1 from "../images/illustration-features-tab-1.svg";

export default function Features(props) {
	return (
		<Box mb={"20"} p={"5"} mx={"auto"} id="FeaturesSection">
			<Text
				mb={"5"}
				letterSpacing={"wider"}
				textAlign={"center"}
				fontSize={"3xl"}
				fontWeight={"bold"}
			>
				Features
			</Text>
			<Text color={"messenger.50"} letterSpacing="wide" textAlign={"center"}>
				Our aim is to make it quick and easy for you to access your favorite
				websites. Your bookmarks sync between your devices so you can access
				them on the go.
			</Text>

			{/* <Flex my={"10"} justifyContent={"space-around"}>

            </Flex> */}

			<Tabs isLazy variant={"unstyled"} my={"16"}>
				<TabList flexDirection={"column"}>
					<Tab
						color={"twitter.100"}
						borderBottom={{ base: "3px solid rgb(81 79 79)" }}
						_selected={{
							borderBottom: "4px solid orangered",
							color: "orangered",
							fontWeight: "semibold",
						}}
						fontSize={"lg"}
						py={"2"}
					>
						Simple Bookmarking
					</Tab>
					<Tab
						color={"twitter.100"}
						borderBottom={{ base: "3px solid rgb(81 79 79)" }}
						_selected={{
							borderBottom: "4px solid orangered",
							color: "orangered",
							fontWeight: "semibold",
						}}
						fontSize={"lg"}
						py={"2"}
					>
						Speedy Searching
					</Tab>
					<Tab
						color={"twitter.100"}
						borderBottom={{ base: "3px solid rgb(81 79 79)" }}
						_selected={{
							borderBottom: "4px solid orangered",
							color: "orangered",
							fontWeight: "semibold",
						}}
						fontSize={"lg"}
						py={"2"}
					>
						Easy Searching
					</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<Image mt={"10"} src={illustration1}></Image>
						<Box id="tab-1-features">
							<Text
								mt={"36"}
								textAlign={"center"}
								fontSize={"2xl"}
								fontWeight={"bold"}
							>
								Bookmark in One Click
							</Text>
							{/* Description */}
							<Text
								mt={"8"}
								color={"messenger.50"}
								letterSpacing="wide"
								textAlign={"center"}
							>
								Organize your bookmarks however you like. Our simple
								drag-and-drop control gives you complete control over how you
								manage your favorite sites
							</Text>
							<Flex alignItems={"center"} justifyContent="center">
								<Button mt={"5"} colorScheme="blue">
									More Info
								</Button>
							</Flex>
						</Box>
					</TabPanel>
					<TabPanel>
						<p>two!</p>
					</TabPanel>
					<TabPanel>
						<p>three!</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
}
