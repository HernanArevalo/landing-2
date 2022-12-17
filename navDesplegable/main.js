const menu = document.querySelector(".dots");

side__bar = document.querySelector("aside");

let menuState = false;

let x = window.matchMedia("(max-width: 700px)");

menu.addEventListener('click',showideMenu);


function showideMenu(){
    if(!menuState){
        menu.classList.add("active");
        side__bar.classList.add("active");
        menuState = true;
    }else{
        menu.classList.remove("active");
        side__bar.classList.remove("active");
        menuState = false;
    }
}

function myFunction(x){
    if (x.natches){
        menu.classList.add("active");
        side__bar.classList.add("active");
    }else{
        menu.classList.remove("active");
        side__bar.classList.remove("active");
    }
}

