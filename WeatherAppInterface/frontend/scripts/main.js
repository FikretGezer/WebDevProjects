const hamburgerMenuBtn = document.querySelector('.hamburger-menu img');
const sideMenu = document.querySelector('.side-menu');
const deneme = function()
{
    hamburgerMenuBtn.style.opacity = "0";
    sideMenu.style.width = "70%";
    playAnimation('animated');
}

hamburgerMenuBtn.addEventListener('click', deneme);

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
    var box = sideMenu;
    box.classList.add(animName);
    setTimeout(function() {
        box.classList.remove(animName);
    }, 300); // Set the timeout to match the animation duration
}
