import Styles from './contentTypes.css'

const ContentTypes = {
	kicker: value => `<div class="${Styles.kicker}"><code>${value}</code></div>`,
	bigNumber: value => `<p class="${Styles.bigNumber}">${value}</p>`,
	factText: value => `<p class="${Styles.factText}">${value}</p>`,
	image: value => `<img class="${Styles.image}" src="${value.source}" alt="${value.alt}" />`,
	sideImg: value => `<div class="${Styles.sideImg}" style="background-image: url(${value.source})"></div>`,
}

export default ContentTypes
