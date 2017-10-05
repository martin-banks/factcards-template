import Styles from './app.css'
import STATE from './state'
// import * as util from './functions/utility'

import NumberCard from './templates/_cards/number/numberCard'
import FullWidthCard from './templates/_cards/fullWidth/fullWidth'

// const { isMobileDevice } = util // true or false
const APP = document.querySelector(STATE.appid)


function buildCards() {
	const allCards = STATE.content.cards.map(card => {
		if (card.cardStyle === 'number') return new NumberCard(card)
		if (card.cardStyle === 'FullWidthCard') return new FullWidthCard(card)
	})
	return `<section class="${Styles.titleWrapper}">
		<div class="${Styles.kicker}"><code>${STATE.kicker}</code></div>
		<h2 class="${Styles.title}">${STATE.title}</h2>
		<h4 class="${Styles.intro}">${STATE.intro}</h4>
	</section>
	<section class="${Styles.cardContainer}">${allCards.map(card => card.render()).join('')}</section>`
}


APP.innerHTML = buildCards()

