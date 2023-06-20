import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "New Example Prompt",
	desc: "Analyze your text or documents and convey the important concepts in bullet form.",
	category: "Programming",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "blue",
	toColor: "blue",

	to: "/ai/example",
	api: "/ai/example",

	output: {
		title: "Output",
		desc: "this is your generated output",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Blog Section",
		desc: " generate a blog section base on the keywords.",
		// n: 1,
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "When doing an your taxes, it's important to...", 
				label: "",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				min: 3,
				required: true,
				error: "", 
				example: "Hello World ",
			},
		],
		example: {
			output: "Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
			// outputs: [
			// 	"The sun is very old, over 4.5 billion years",
			// 	"At 10,000 degrees, sun is also very hot",
			// 	"Gasses called coronal mass ejections erupt from the sun",
			// ],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj

