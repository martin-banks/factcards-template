import Styles from './numberCard.css'
import ContentTypes from '../contentTypes'

// const contentTypes = {
// 	kicker: value => `<div class="${Styles.kicker}"><code>${value}</code></div>`,
// 	bigNumber: value => `<p class="${Styles.bigNumber}">${value}</p>`,
// 	factText: value => `<p class="${Styles.factText}">${value}</p>`,
// 	image: value => `<img src="${value.source}" alt="${value.alt}" />`,
// }

class NumberCard {
	constructor(card) {
		this.cardStyle = card.cardStyle
		this.content = card.content
		this.size = card.size || 1
	}

	render() {
		return `<div class="${Styles.card}" data-size="${this.size > 1 ? 'full' : 'small'}" data-type="${this.cardStyle}">
			<div class="${Styles.contentWrapper}" >
				${this.content.map(elem => ContentTypes[elem.type](elem.value)).join('')}
			</div>
		</div>`
	}

}

export default NumberCard
