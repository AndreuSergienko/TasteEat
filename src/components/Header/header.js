import './header.scss'

const burgerButton = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.header__burger-menu')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')

window.addEventListener('scroll', () => {
	let scrollY = window.pageYOffset

	if (scrollY > 100) {
		burgerButton.classList.add('scrolled')
	} else {
		burgerButton.classList.remove('scrolled')
	}
})

burgerButton.addEventListener('click', (e) => {
	const target = e.target.closest('.header__burger')

	target.classList.add('hide')

	burgerMenu.classList.add('active')
	overlay.classList.add('active')
	body.classList.add('lock')

})

const closingElements = document.querySelectorAll('[data-closing]')

closingElements.forEach(el => {
	el.addEventListener('click', (e) => {
		e.preventDefault()
		burgerButton.classList.remove('hide')
		burgerMenu.classList.remove('active')
		overlay.classList.remove('active')
		body.classList.remove('lock')
	})
})


























// if (menuClose) {
	// 	menuClose.addEventListener('click', (e) => {
	// 		burgerMenu.classList.remove('active')
	// 		target.classList.remove('hide')
	// 		overlay.classList.remove('active')
	// 		body.classList.remove('lock')
	// 	})
	// }

	// if (overlay) {
	// 	overlay.addEventListener('click', (e) => {
	// 		const target = e.target.closest('.overlay')
	// 		target.classList.remove('active')
	// 		burgerMenu.classList.remove('active')
	// 		burgerButton.classList.remove('hide')
	// 		body.classList.remove('lock')
	// 	})
	// }

	// const burgerLinks = burgerMenu.querySelectorAll('.header__burger-link')

	// burgerLinks.forEach(link => {
	// 	link.addEventListener('click', (e) => {
	// 		burgerMenu.classList.remove('active')
	// 		overlay.classList.remove('active')
	// 		burgerButton.classList.remove('hide')
	// 	})
	// })