const TEXT_AREA = document.querySelector("#text-area");

let timer;
function onloadHandler(){

    if(localStorage.getItem("savedText")){
        TEXT_AREA.value = localStorage.getItem("savedText");
    }

}

function saveData(){

    localStorage.setItem("savedText",TEXT_AREA.value);
}

document.addEventListener("DOMContentLoaded",onloadHandler);
TEXT_AREA.addEventListener("keyup",saveData);
