

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
let btnRight = document.querySelector("#btn-right");
let btnLeft = document.querySelector("#btn-left");
let slideLi = document.querySelectorAll(".slide-li");
let i = 0;
function slideRight(){
    if (i < document.querySelectorAll(".slide-li").length - 1){
        slideLi[i].style.display = "none";
        i++;
        slideLi[i].style.display = "flex";
        btnLeft.style.display = "block";
    }
    if (i === document.querySelectorAll(".slide-li").length - 1){
        btnRight.style.display = "none";
    }
}

function slideLeft(){   
    if (i < document.querySelectorAll(".slide-li").length){
        slideLi[i].style.display = "none";
        i--;
        slideLi[i].style.display = "flex";
        btnRight.style.display = "block";
    }
    if (i === 0){
        btnLeft.style.display = "none";   
    }
}

let dropBtn = document.querySelector(".drop-down-menu");
let content = document.querySelector(".drop-down-content");
let dropDown = function(evnObj){
    content.style.display = "block";
    evnObj.stopPropagation();  // 停止事件冒泡
}
dropBtn.addEventListener("click",dropDown);
document.addEventListener('click', function() {
    if (content.style.display == "block"){
        content.style.display = "none";
    }
});



