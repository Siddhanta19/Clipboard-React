import daniel from "../images/image-daniel.jpg";
import jonathan from "../images/image-jonathan.jpg";
import kira from "../images/image-kira.jpg";
import jeanette from "../images/image-jeanette.jpg";
import patrick from "../images/image-patrick.jpg";

export default function peopleData() {
	const people = [
		// 1

		{
			name: "Daniel Clifford",

			role: "Verified Graduate",
			image: daniel,

			comment: `I received a job offer mid-course, and the subjects that I learnt
            were current, if not more. The company is great. I honestly feel I
            got every penny's worth.`,

			story: `"I was an EMT for many years before I joined the bootcamp. I have
        been looking to make a transition and have heard from some people
        who have had an amazing experience here. I signed up for the free
        intro course and found it incredibly fun! I enrolled shortly
        thereafter. The next 12 weeks was the best - and most grueling -
        time of my life. Since completing the course, I have successfully
        switched careers, working as a software engineer at a VR startup."`,

			cssProps: {
				colSpan: `2`,
				borderRadius: `xl`,
				bg: `purple.700`,
			},
		},

		// 2
		{
			name: "Jonathan Walters",

			role: "Verified Graduate",
			image: jonathan,

			comment: `The Team was very supportive and kept me motivated.`,
			story: `"I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I have ever made in myself."`,

			cssProps: {
				colSpan: `1`,
				borderRadius: `xl`,
				bg: `gray.700`,
			},
		},

		// 3

		{
			name: "Kira Wheattle",

			role: "Verified Graduate",
			image: kira,

			comment: `It's Life-changing experience, Highly recommended!`,
			story: `"Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student who could only say about the wonderful things about this program. The curriculum and staff didn't dissapoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full stack developer after receiving multiple offers. 100% recommend! " `,

			cssProps: {
				colSpan: `1`,
				rowSpan: `2`,
				borderRadius: `xl`,
				bg: `purple.700`,
			},
		},

		// 4

		{
			name: "Jeanette Harmon",

			role: "Verified Graduate",
			image: jeanette,

			comment: `An overall wonderful and rewarding experience`,
			story: `"Thank you for the wonderful experience! I now have a job, I really enjoy, and make a good living while doing something I love."`,

			cssProps: {
				colSpan: `1`,
				borderRadius: `xl`,
				bg: `gray.700`,
			},
		},

		// 5

		{
			name: "Patrick Abrams",

			role: "Verified Graduate",
			image: patrick,

			comment: `Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.`,
			story: `"The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. you will get the personal attention you need from an incredible community of smart and amazing people."`,
			cssProps: {
				colSpan: `2`,
				borderRadius: `xl`,
				bg: `gray.900`,
			},
		},
	];

	console.log(people[0].cssProps.colSpan);

	return people;
}
