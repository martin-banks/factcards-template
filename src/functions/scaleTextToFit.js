function scaleTextToFit({ elem, parent }) {
	if (elem.offsetWidth * 1.02 <= parent.offsetWidth) {
		let size = parseInt(getComputedStyle(elem, null).getPropertyValue('font-size').split('px')[0]) + 1

		elem.style.fontSize = `${size}px`
		elem.style.lineHeight = `${size}px`
		scaleTextToFit(elem)
	}
}

// text.forEach(t => scaleTextToFit(t))

export default scaleTextToFit
