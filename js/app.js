const images = document.querySelectorAll('.property__image')

window.addEventListener('scroll', () => {
	let scrollY = this.scrollY / -20
	images.forEach((image, index) => {
		if (index >= 5) {
			scrollY /= -10
		}
		console.log(scrollY)
		image.style.backgroundPositionY = `${scrollY}px`
	})
})
