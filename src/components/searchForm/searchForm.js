import './searchForm.scss';

const select = document.querySelector('.search-form__select');

function getTextWidth(text, font) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
    return context.measureText(text).width;
}

select.addEventListener('change', function (evt) {
    const target = evt.target;
    const selectPadding = 6;
    target.style.width = (getTextWidth(target.value, '14px Amazon Ember') + selectPadding * 2) + 'px'
})