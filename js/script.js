const catPicture = document.querySelector('.cat-frame');
const catTail = document.querySelector('.cat-tail');
const clicks = document.querySelector('.clicks-num');
const audio = document.querySelector('.cat-audio');
const catFrame = document.querySelector('.cat-frame');
const catMain = document.querySelector('.elasticstack');
const firstLi = document.querySelector('li');
const introText = document.querySelector('.cat-text');
let countClick = 0;

function removeAnimate() {
    this.classList.remove('wiggle');
}

setTimeout(() => {
    introText.style.opacity = '0';
    introText.addEventListener('transitionend', () => {
        introText.style.opacity = '1';
    });
}, 1500);

setTimeout(() => {
    introText.textContent = "Click or drag me!";
}, 3000);


firstLi.addEventListener('click', function () {
    catTail.classList.add('wiggle');
    countClick++;
    clicks.textContent = countClick;
    audio.currentTime = 0;
    audio.play();
    catTail.addEventListener('animationend', removeAnimate);
});

class Cat {
    constructor(catName, photo = 'img/cat.tail.png') {
        this.catName = catName;
        this.clicks = countClick;
        this.photo = photo;
    }
    click() {
        this.clicks++;
    }
}

// Create an array of cats using the contructor class
const cats = [new Cat('Albert'), new Cat('Salom'), new Cat('Saba'), new Cat('Kami'), new Cat('Mila')];
// Deconstruct the array in case of need to manipulate
// [albert, salom, greg, milka] = cats;

// Let's loop over the cats array
for (i = 0; i < cats.length; i++) {
    const cat = cats[i];
    // We're creating a DOM element for the each cat
    const catDiv = document.createElement('li');
    catDiv.classList.add('cat-frame');
    catDiv.innerHTML = catFrame.innerHTML;
    catDiv.style.display = 'block';
    catDiv.id = `slide-${i}`;
    const clicksN = catDiv.querySelector('.clicks-num');
    const catPhoto = catDiv.querySelector('.cat-picture');
    const tailN = catDiv.querySelector('.cat-tail');
    const catText = catDiv.querySelector('.cat-text');
    tailN.style.display = 'none';
    catPhoto.src = `img/cat-${i}.png`;
    catText.textContent = `I'm ${cat.catName}!`;
    // ... and when we click, increase clicks of this cat
    catDiv.addEventListener('click', () => {
        cat.click();
        clicksN.textContent = cat.clicks;
        audio.currentTime = 0;
        audio.play();
        tailN.addEventListener('animationend', removeAnimate);
    });
    catMain.appendChild(catDiv);
};