const slider = document.querySelector('.song-range');
slider.value = 0;
let min = 0;
let seconds = 0;
let previousDisc = 0;
slider.addEventListener('input', () => {
    let val = slider.value / 100;
    let time = (262 * val);    
    seconds = `${time}`.split('.')[0]; 
    if(Number(seconds) % 60 === 0)
    {
        min += 1;
    }

    //console.log(`${min}:${seconds}`);
    console.log(`${time} => ${min}`);
});