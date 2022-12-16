import React from "react";
import { chakra } from "@chakra-ui/react";

// imp chakra ui
import {
	ChakraProvider,
	Box,
	Text,
	Image,
	theme,
	Flex,
	Container,
	Stack,
	Grid,
	StackDivider,
	Icon,
	Divider,
} from "@chakra-ui/react";

import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

// imp dark/light mode
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import { Logo } from "./Logo";
import logo from "./images/logo.svg";
import BigPara from "./BigPara";
import SmallPara from "./SmallPara";
import BigHeadingPara from "./BigHeadingPara";
import SmallHeadingPara from "./SmallHeadingPara";

// importing download buttons
import DownloadButtons from "./DownloadButtonGroup";

import computer from "./images/image-computer.png";

import mobile_computer from "./images/image-devices.png";

// importing summary icons
import text from "./images/icon-text.svg";
import blacklist from "./images/icon-blacklist.svg";
import preview from "./images/icon-preview.svg";

import SponsorsLogo from "./SponsorsLogo";

function App() {
	const {
		firstParas: [mainDesc1, mainDesc2, mainDesc3, mainDesc4],
	} = BigPara();
	const {
		secondParas: [[subDesc1, subDesc2, subDesc3]],
	} = SmallPara();
	return (
		<ChakraProvider theme={theme}>
			<Box px={["6", null, "12"]} my={"24"} id="HeaderArea">
				<Flex justify={"flex-end"}>
					<ColorModeSwitcher />
				</Flex>

				<Stack
					direction={"column"}
					spacing={"7"}
					justifyContent={"center"}
					alignItems={"center"}>
					<Logo />
					<Text
						fontSize={["3xl", "4xl", null, "5xl"]}
						align={"center"}
						fontWeight={"bold"}
						letterSpacing={"wider"}>
						A History of Everything You Copy
					</Text>
					<BigHeadingPara paraData={mainDesc1} />
					<DownloadButtons />
				</Stack>
			</Box>

			<Box px={["6", null, "12"]} mb={"24"} id="contentArea">
				{/* Features1 */}

				<Box id="features1">
					<Stack
						direction={"column"}
						spacing={"7"}
						justifyContent={"center"}
						alignItems={"center"}>
						<Text
							fontSize={["3xl", "4xl", null, "5xl"]}
							fontWeight={"bold"}
							align={"center"}
							letterSpacing={"wider"}>
							Keep Track of Your Snippets
						</Text>
						<BigHeadingPara paraData={mainDesc2} />
					</Stack>
				</Box>

				{/* Features2 */}

				<Box id="features2" mt={"56"}>
					<Stack
						pos={"relative"}
						spacing={"20"}
						mt={"20"}
						/* justifyContent={{ base: "center", lg: "space-around" }} */
						direction={{ base: "column", md: "row" }}>
						<Box w={{ base: null, md: "50%" }}>
							<Image
								position={{ base: "static", md: "absolute" }}
								top="0"
								right="50%"
								src={computer}
								marginRight={"40"}
							/>
						</Box>

						<Stack spacing={"20"} id="features2Text">
							<Box id="quickSearchSection">
								<Text
									fontSize={["xl", "2xl", "3xl"]}
									align={{ base: "center", md: "initial" }}
									fontWeight={"bold"}
									letterSpacing={"widest"}>
									Quick Search
								</Text>
								<Flex textAlign={"left"}>
									<SmallHeadingPara paraData={subDesc1} />
								</Flex>
							</Box>

							<Box id="iCloudSection">
								<Text
									fontSize={["xl", "2xl", "3xl"]}
									align={{ base: "center", md: "initial" }}
									fontWeight={"bold"}
									letterSpacing={"widest"}>
									iCloud Sync
								</Text>

								<SmallHeadingPara paraData={subDesc2} />
							</Box>

							<Box id="completeHistorySection">
								<Text
									fontSize={["xl", "2xl", "3xl"]}
									align={{ base: "center", md: "initial" }}
									fontWeight={"bold"}
									letterSpacing={"widest"}>
									Complete History
								</Text>
								<SmallHeadingPara paraData={subDesc3} />
							</Box>
						</Stack>
					</Stack>
				</Box>

				{/* features3 */}

				<Box id="features3" mt={"56"}>
					<Stack spacing={"7"} justifyContent={"center"} alignItems={"center"}>
						<Text
							fontSize={["3xl", "4xl"]}
							align={"center"}
							fontWeight={"bold"}
							letterSpacing={"wider"}>
							Access Clipboard Anywhere
						</Text>
						<BigHeadingPara paraData={mainDesc3} />
						<Image src={mobile_computer} />
					</Stack>
				</Box>

				{/* Features Summary */}

				<Box id="featuresSummary" mt={"36"}>
					<Box mb={{ base: null, lg: "28" }}>
						<Text
							fontSize={["3xl", null, "4xl"]}
							align={"center"}
							fontWeight={"bold"}
							letterSpacing={"wider"}
							my={{ lg: "5" }}>
							Supercharge your Workflow
						</Text>
						<Text
							align={"center"}
							fontWeight={"medium"}
							fontSize={{ base: "sm", sm: "lg", md: "2xl" }}
							color={"gray.300"}
							my={{ lg: "5" }}>
							We've got the tools to boost your productivity.
						</Text>
					</Box>

					<br />
					<br />

					<Stack
						direction={{ base: "column", lg: "row" }}
						spacing={{ base: "6", lg: "20" }}
						mb={"20"}
						justifyContent={"center"}>
						<Stack spacing={"5"} alignItems={"center"}>
							<Image
								src={blacklist}
								/* boxSize={{ base: "20", md: "28" }}
								mt={{ base: "5", md: "10" }} */
							/>
							<Text
								fontSize={["xl", "2xl", "3xl"]}
								align={"center"}
								fontWeight={"bold"}
								letterSpacing={"widest"}>
								Quick Search
							</Text>
							<SmallHeadingPara paraData={subDesc1} textAlign={"center"} />
						</Stack>

						<StackDivider />

						<Stack spacing={"5"} alignItems={"center"}>
							<Image
								src={text}
								/* boxSize={{ base: "20", md: "28" }}
								mt={{ base: "5", md: "10" }} */
							/>
							<Text
								fontSize={["xl", "2xl", "3xl"]}
								align={"center"}
								fontWeight={"bold"}
								letterSpacing={"widest"}>
								iCloud Sync
							</Text>
							<SmallHeadingPara textAlign={"center"} paraData={subDesc2} />
						</Stack>

						<StackDivider />

						<Stack spacing={"5"} alignItems={"center"}>
							<Image src={preview} />
							<Text
								fontSize={["xl", "2xl", "3xl"]}
								align={"center"}
								fontWeight={"bold"}
								letterSpacing={"widest"}>
								Sneak Preview
							</Text>
							<Text as={"span"}>
								<SmallHeadingPara textAlign={"center"} paraData={subDesc3} />
							</Text>
						</Stack>
					</Stack>
				</Box>

				{/* Supporters/Partners */}

				<Box id="Supporters" mt={"36"}>
					<Text
						fontSize={"3xl"}
						align={"center"}
						fontWeight={"bold"}
						letterSpacing={"widest"}
						mb={"20"}>
						Our Supporters
					</Text>
					<Stack
						direction={{ base: "column", lg: "row" }}
						alignItems="center"
						justifyContent={"center"}
						spacing={"24"}>
						<SponsorsLogo />
					</Stack>
				</Box>

				{/* Call to Action / Download */}
				<Box id="downloadPrompt" mt={"36"}>
					<Stack
						direction={"column"}
						spacing={"7"}
						justifyContent={"center"}
						alignItems={"center"}>
						<Text
							fontSize={"3xl"}
							align={"center"}
							fontWeight={"bold"}
							letterSpacing={"wider"}>
							Clipboard for iOS and Mac OS
						</Text>
						<BigHeadingPara paraData={mainDesc4} />
						<DownloadButtons mb={"16"} />
					</Stack>
				</Box>
			</Box>

			<Box id="Footer">
				<Divider />

				<Grid
					templateColumns={{ lg: "auto 1fr auto" }}
					justifyItems={"center"}
					alignItems={"center"}
					px={["2", null, "12"]}
					justifyContent="space-around">
					<Image py={"10"} src={logo} maxW={"10"} />

					<Flex
						gap={"5"}
						flexWrap={"wrap"}
						direction={"row"}
						fontSize={{ base: "md", lg: "xl" }}>
						<chakra.ul display={"flex"} listStyleType={"none"} gap={"6"}>
							<chakra.li>Contact </chakra.li>
							<chakra.li>About</chakra.li>
							<chakra.li>Install Guide</chakra.li>
							<chakra.li>Privacy Policy</chakra.li>
							<chakra.li>FAQs</chakra.li>
						</chakra.ul>
					</Flex>

					<Stack
						direction={{ base: "row" }}
						spacing={"12"}
						alignItems="center"
						justifyContent={"space-around"}
						py={"5"}>
						<Icon boxSize={"10"} as={FaFacebook} />
						<Icon boxSize={"10"} as={IoLogoTwitter} />
						<Icon boxSize={"10"} as={FaYoutube} />
						<Icon boxSize={"10"} as={FaGithub} />
						<Icon boxSize={"10"} as={FaInstagram} />
					</Stack>
				</Grid>
			</Box>
		</ChakraProvider>
	);
}

export default App;
