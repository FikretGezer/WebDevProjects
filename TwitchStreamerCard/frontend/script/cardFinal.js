const infoExp = document.querySelector('.middle-info');

let newVersion = "";
let length = infoExp.innerHTML.length;
if(length > 96)
{
    for(let i = 0; i < 80; i++)
    {
        newVersion += infoExp.innerHTML[i];
    }
    infoExp.innerHTML = newVersion + "...";
}