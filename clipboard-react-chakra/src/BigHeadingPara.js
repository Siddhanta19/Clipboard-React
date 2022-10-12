import { Container, Center, Text, Box } from "@chakra-ui/react";
import React from "react";

function BigHeadingPara({ paraData }) {
	const [paraDataFirstPart, paraDataSecondPart] = paraData;
	return (
		<Box>
			<Text
				align={"center"}
				fontWeight={"medium"}
				fontSize={{ base: "md", sm: "xl", md: "2xl", lg: "3xl" }}
				color={"gray.300"}
				px={'10'}
			>
				{paraDataFirstPart}
				<br />
				{paraDataSecondPart}
			</Text>
		</Box>
	);
}

export default BigHeadingPara;
