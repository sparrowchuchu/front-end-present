

function showMore(){
    let showMore = document.querySelector("#showMore");
    showMore.style.display = "none";
    
    let displayType = document.querySelectorAll(".display-type");
    for(let i=0; i<displayType.length; i++){
        displayType[i].style.display = "inline";
    }
}

function showLess(){
    let showLess = document.querySelector("#showLess");
    showLess.style.display = "none";

    let displayType = document.querySelectorAll(".display-type");
    for(let i=0; i<displayType.length; i++){
        displayType[i].style.display = "none";
    }

    let showMore = document.querySelector("#showMore");
    showMore.style.display = "block";
}

// 
let rightBtn = document.querySelector("#btn-right");
let leftBtn = document.querySelector("#btn-left");
let slideLi = document.querySelectorAll(".slide-li");
let i = 0;
function slideRight(){
    if (i < document.querySelectorAll(".slide-li").length - 1){
        slideLi[i].style.display = "none";
        i++;
        slideLi[i].style.display = "flex";
        leftBtn.style.display = "block";
    }
    if (i === document.querySelectorAll(".slide-li").length - 1){
        rightBtn.style.display = "none";
    }
}

function slideLeft(){   
    if (i < document.querySelectorAll(".slide-li").length){
        slideLi[i].style.display = "none";
        i--;
        slideLi[i].style.display = "flex";
        rightBtn.style.display = "block";
    }
    if (i === 0){
        leftBtn.style.display = "none";   
    }
}


