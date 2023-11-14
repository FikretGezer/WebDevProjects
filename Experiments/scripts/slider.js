import {images} from '../scripts/slider-images.js';

const actualImage = document.querySelector('.actual-image');
const actualImageSecond = document.querySelector('.actual-image-second');

let currentImageIndex = 0;

//Set images for start
actualImage.style.setProperty('background-image', `url(${images[currentImageIndex]})`);
actualImageSecond.style.setProperty('background-image', `url(${images[currentImageIndex + 1]})`);

currentImageIndex = 2;

let slideChanger = true;
setInterval(() => {
    if(slideChanger)
    {
        SetImages(actualImage, actualImageSecond);
    }
    else
    {
        SetImages(actualImageSecond, actualImage);
    }

    if(currentImageIndex < images.length - 1) currentImageIndex++;
    else currentImageIndex = 0;

    slideChanger = !slideChanger;
}, 3000);

function SetImages(currentImage, nextImage)
{
    //set position for cover image
    currentImage.style.setProperty('left', '100%');
    //set position for next image
    nextImage.style.setProperty('left', '0%');
    currentImage.style.setProperty('z-index', '0');
    nextImage.style.setProperty('z-index', '1');

    setTimeout(() => {
        currentImage.style.setProperty('background-image', `url(${images[currentImageIndex]})`);
        currentImage.style.setProperty('left', '-100%');
    }, 500);
}