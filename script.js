let image = ["url1.jpg", "url2.jpg", "url3.jpg"]
let slider = document.querySelector("#slider")
let indicatorList = document.querySelector('#indicatorList')
let indicators;
for (let i = 0; i < image.length; i++) {
    li = document.createElement('li')
    indicatorList.appendChild(li)
    li.classList.add("indicator")
}
indicators = document.querySelectorAll(".indicator");
let i = 0;
slider.src = `images/${image[0]}`
indicators[0] = borderColor = ('red')
let btnLeft = document.querySelector('#left')
let btnRight = document.querySelector('#right')
btnLeft.addEventListener('click', (e) => {
    e.preventDefault()
    prev()
})
btnRight.addEventListener('click', (e) => {
    e.preventDefault()
    next()
})
function prev() {
    i = i - 1
    if (i < 0) {
        i = image.length - 1;
    }
    slider.src = `images/${image[i]}`;
    for (let i = 0; i < image.length; i++) {
        indicators[i].style.borderColor = 'transparent';

    }
    indicators[i].style.borderColor = 'blue';
}
function next() {
    i = i + 1
    if (i > image.length - 1) {
        i = 0
    }
    slider.src = `images/${image[i]}`;
    for (let i = 0; i < image.length; i++) {
        indicators[i].style.borderColor = 'transparent';

    }
    indicators[i].style.borderColor = 'blue';
}