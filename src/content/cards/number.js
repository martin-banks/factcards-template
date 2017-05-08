import Image from '../images/test.jpg'

const BigNumberCard = {
	cardStyle: 'number',
	backgroundImage: '',
	backgroundColor: '',
	size: 1,

	content: [
		// {
		// 	type: 'image',
		// 	value: {
		// 		source: Image,
		// 		alt: 'blah',
		// 	},
		// },
		{
			type: 'bigNumber',
			value: '123',
		},
		{
			type: 'factText',
			value: 'Facts about something interesting',
		},

	],
}

export default BigNumberCard
