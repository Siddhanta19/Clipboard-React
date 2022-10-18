import {
	Container,
	Center,
	Text,
	Box,
	color,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function SmallHeadingPara(props) {
	// paraData is assigned the value of paraData
	// rest is assigned the object of all other properties
	const colorValue = useColorModeValue("green.50", "blackAlpha.700");
	const { paraData, ...rest } = props;

	return (
		<Box>
			<Text
				align={{ base: "center", md: "start" }}
				fontWeight={"medium"}
				fontSize={{ base: "sm", sm: "xl", md: "2xl" }}
				color={{ colorValue }}
				{...rest}
			>
				{paraData}
			</Text>
		</Box>
	);
}

export default SmallHeadingPara;
