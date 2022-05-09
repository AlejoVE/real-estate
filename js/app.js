const images = document.querySelectorAll('.property__image')

window.addEventListener('scroll', () => {
	const scrollY = this.scrollY / -20
	images.forEach((image) => {
		image.style.backgroundPositionY = `${scrollY}px`
	})
})
