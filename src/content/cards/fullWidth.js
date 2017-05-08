import Image from '../images/test.jpg'

const FullWidthCard = {
	cardStyle: 'FullWidthCard',
	backgroundImage: '',
	backgroundColor: '',
	size: 2,

	content: [
		{
			type: 'sideImg',
			value: {
				source: Image,
				alt: 'Image caption text',
			},
		},
		{
			type: 'factText',
			value: 'Facts about something interesting Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		},

	],
}

export default FullWidthCard
