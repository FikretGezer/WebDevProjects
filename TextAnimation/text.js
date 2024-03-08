const button = document.querySelector('.text-container');
const defaultName = button.innerText;
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let i = 0;
let letterIndexInText = 0;
let interv;



button.addEventListener('mouseover',() => {
    SwitchText("cyan", "Shit");
    Reload();
});

button.addEventListener('mouseout',() => {
    SwitchText("white", defaultName);
    clearInterval(interv);
    k = 0;
    i = 0;
    button.innerText = defaultName;
});

function SwitchText(color, text){
    button.style.color = color;
    // button.innerText = text;
}
function Reload(){
    let first;

    interv = setInterval(() => {

        first = alphabet[i];
        if(letterIndexInText + 1 < defaultName.length)
        {
            if(letterIndexInText + 1 > 1)
                button.innerText = defaultName.substring(0, letterIndexInText) + first + defaultName.substring(letterIndexInText + 1, defaultName.length);
            else
                button.innerText = first + defaultName.substring(letterIndexInText + 1, defaultName.length);
        }
        if(defaultName[letterIndexInText] == first)
        {
            if(letterIndexInText < defaultName.length)
            {
                console.log(first);
                i = 0;
                letterIndexInText++;
                Reload();
            }
            clearTimeout(interv);

        }
        if(i < alphabet.length - 1);
            i++;

    }, 1);
}