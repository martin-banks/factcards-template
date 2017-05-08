import Styles from './fullWidth.css'
import ContentTypes from '../contentTypes'

class FullWidthCard {
	constructor(card) {
		this.cardStyle = card.cardStyle
		this.content = card.content
		this.size = card.size || 1
	}

	render() {
		return `<div class="${Styles.card} "  >
			<div class="${Styles.contentWrapper}" >
				${this.content.map(elem => ContentTypes[elem.type](elem.value)).join('')} 
			</div>
		</div>`
	}

}

export default FullWidthCard
