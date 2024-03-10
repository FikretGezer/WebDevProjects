const infoExp = document.querySelector('.infos-explanation');
const followers = document.querySelector('.infos-followers');

let newVersion = "";
let length = infoExp.innerHTML.length;
if(length > 137)
{
    for(let i = 0; i < 121; i++)
    {
        newVersion += infoExp.innerHTML[i];
    }
    infoExp.innerHTML = newVersion + "...";
}
