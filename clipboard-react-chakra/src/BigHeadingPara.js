import {
	Container,
	Center,
	Text,
	Box,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function BigHeadingPara({ paraData }) {
	const colorValue = useColorModeValue("green.50", "blackAlpha.700");
	const [paraDataFirstPart, paraDataSecondPart] = paraData;
	return (
		<Box>
			<Text
				align={"center"}
				fontWeight={"medium"}
				fontSize={{ base: "md", sm: "xl", md: "2xl", lg: "3xl" }}
				color={{ colorValue }}
				px={"10"}
			>
				{paraDataFirstPart}
				<br />
				{paraDataSecondPart}
			</Text>
		</Box>
	);
}

export default BigHeadingPara;
