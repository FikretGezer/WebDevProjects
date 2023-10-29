const slider = document.querySelector('.song-range');
const actualTime = document.querySelector('.js-actual-time');
const playButton = document.querySelector('.js-play-music');
slider.value = 0;
let min = 0;
let seconds = 0;
let previousDisc = 0;
let total = 0;
let isPlaying = false;

playButton.addEventListener('click', () => {
    if(!isPlaying)
    {
        const curInter = setInterval(() => {
            isPlaying = true;
            let text = `00:00`;
            if(slider.value < 100)
            {
                seconds++;
                total++;
                if(seconds > 59)
                {
                    seconds = 0;
                    min++;
                }
                let val = (total / 262) * 100;
                slider.value = val;
        
                
        
                if(seconds < 10)
                {
                    text = `0${min}:0${seconds}`;
                }
                else
                {
                    text = `0${min}:${seconds}`;
                }
        
                actualTime.innerHTML = text;
            }
            else
            {
                isPlaying = false;
                slider.value = 0;
                seconds = 0;
                total = 0;
                min = 0;
                text = `00:00`;
                actualTime.innerHTML = text;
        
                clearInterval(curInter);
            }
        }, 100);
    }
});




slider.addEventListener('input', () => {
    let val = slider.value / 25;
        //console.log(`${min}:${seconds}`);
    console.log(`${val}`);
});