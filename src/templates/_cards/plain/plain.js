import Styles from './numberCard.css'

const contentTypes = {
	kicker: value => `<div class="${Styles.kicker}"><code>${value}</code></div>`,
	bigNumber: value => `<p class="${Styles.bigNumber}">${value}</p>`,
	factText: value => `<p class="${Styles.factText}">${value}</p>`,
	image: value => `<img src="${value.source}" alt="${value.alt}" />`,
}

class PlainCard {
	constructor(card) {
		this.cardStyle = card.cardStyle
		this.content = card.content
		this.size = card.size || 1
	}

	render() {
		return `<section class="${Styles.card}" style="flex: ${this.size}" >
			<div class="${Styles.contentWrapper}" >
				${this.content.map(elem => contentTypes[elem.type](elem.value)).join('')}
			</div>
		</section>`
	}

}

export default PlainCard
