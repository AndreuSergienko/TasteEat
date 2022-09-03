import './dropdown.scss'
import anime from 'animejs/lib/anime.es.js';

const dropdownCollection = document.querySelectorAll('.dropdown');


// for(let i = 0; i < dropdownCollection.length; i++) {
//     const current = dropdownCollection[i];
//     const dropdownList = current.querySelector('.dropdown-list');
//     current.addEventListener('click', function() {
//         anime({
//             targets: dropdownList,
//             opacity: 1,
//             easing: 'easeInOutQuad'
//         })
//     })
// }

function useClickOutside(target, callback) {

    function handleEvent(evt) {
        console.log(target.contains(evt.target))
        if (!target.contains(evt.target)) {
            callback();
        }
    }
    document.addEventListener('click', handleEvent)
}

const header = document.querySelector('.header');

function toggleDropDown(evt) {
    const target = evt.target.closest('.dropdown');
    if (target) {
        target.classList.toggle('dropdown-active');
        const isActive = target.classList.contains('dropdown-active');
        anime({
            targets: [
                target.querySelector('.dropdown-list'),
                target.querySelector('.dropdown-list').children[0]
            ],
            height: isActive ? 200 : 0,
            opacity: isActive ? 1 : 0,
            duration: 1000
        })

        useClickOutside(target, function () {
            target.classList.remove('dropdown-active');
            anime({
                targets: [
                    target.querySelector('.dropdown-list'),
                    target.querySelector('.dropdown-list').children[0]
                ],
                height: 0,
                opacity: 0,
                duration: 1000
            })
        })
    }
}

header.addEventListener('click', toggleDropDown)