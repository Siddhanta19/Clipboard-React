import React from "react";
import { Image } from "@chakra-ui/react";

// importing all the sponsors logo
import google from "./images/logo-google.png";
import hp from "./images/logo-hp.png";
import ibm from "./images/logo-ibm.png";
import microsoft from "./images/logo-microsoft.png";
import vector_graphics from "./images/logo-vector-graphics.png";

export default function SponsorsLogo() {
	return (
		<React.Fragment>
			<Image src={google} />
			<Image src={hp} />
			<Image src={ibm} />
			<Image src={microsoft} />
			<Image src={vector_graphics} />
		</React.Fragment>
	);
}
