const hamburgerMenuBtn = document.querySelector('.hamburger-menu img');
const sideMenu = document.querySelector('.side-menu');
const appTitle = document.querySelector('.app-title');
const weatherImage = document.querySelector('.weather-image');

const startSideBarAnim = function()
{
    hamburgerMenuBtn.style.opacity = "0";
    sideMenu.style.width = "70%";
    playAnimation('animated');
}

hamburgerMenuBtn.addEventListener('click', startSideBarAnim);

document.addEventListener('click', event => {
    var isInside = document.querySelector('.side-menu').contains(event.target) ||
                   document.querySelector('.hamburger-menu img').contains(event.target);
    if(!isInside && sideMenu.style.width === "70%")
    {
        hamburgerMenuBtn.style.opacity = "1";
        sideMenu.style.width = "0%";
        playAnimation('animated-reverse');
    }
});

function playAnimation(animName) {
    sideMenu.classList.add(animName);
    setTimeout(() => {
        sideMenu.classList.remove(animName);
    }, 300);
}
function remapValue(value, inputMin, inputMax, outputMin, outputMax) {
    var normalizedValue = (value - inputMin) / (inputMax - inputMin);

    var remappedValue = normalizedValue * (outputMax - outputMin) + outputMin;

    return remappedValue;
}
const currentScreenWidth = window.innerWidth;
document.addEventListener('mousemove', event => {
    var mouseX = event.clientX;
    var remapedValue = 0;
    if(mouseX > currentScreenWidth / 2)
    {
        remapedValue = remapValue(mouseX, currentScreenWidth / 2, currentScreenWidth, 0, 65);
        weatherImage.style.setProperty('--td-rotateY',`rotate3d(1, 1, 1, ${remapedValue}deg)`);
    }
    else
    {
        remapedValue = remapValue(mouseX, 0, currentScreenWidth / 2, -65, 0);
        weatherImage.style.setProperty('--td-rotateY',`rotate3d(1, 1, 1, ${remapedValue}deg)`);
    }
});
