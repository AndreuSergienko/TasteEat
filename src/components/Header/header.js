import './header.scss'

const burgerButton = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.header__burger-menu')
const menuClose = burgerMenu.querySelector('.header__burger-close')
const overlay = document.querySelector('.overlay')

burgerButton.addEventListener('click', (e) => {
	const target = e.target.closest('.header__burger')

	target.classList.add('hide')

	burgerMenu.classList.add('active')
	overlay.classList.add('active')

	if (menuClose) {
		menuClose.addEventListener('click', (e) => {
			burgerMenu.classList.remove('active')
			target.classList.remove('hide')
			overlay.classList.remove('active')
		})
	}

	if (overlay) {
		overlay.addEventListener('click', (e) => {
			const target = e.target.closest('.overlay')

			target.classList.remove('active')
			burgerMenu.classList.remove('active')
			burgerButton.classList.remove('hide')
		})
	}

	const burgerLinks = burgerMenu.querySelectorAll('.header__burger-link')

	burgerLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			burgerMenu.classList.remove('active')
			overlay.classList.remove('active')
			burgerButton.classList.remove('hide')
		})
	})
})
