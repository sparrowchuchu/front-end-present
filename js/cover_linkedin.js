

function showMore(){
    let showMore = document.querySelector("#showMore");
    showMore.style.display = "none";
    
    let displayType = document.querySelectorAll(".display-type");
    console.log("displayType",displayType);
    for(let i=0; i<displayType.length; i++){
        displayType[i].style.display = "inline";
    }
    let showLess = document.querySelector("#showLess");
    
    
}

function showLess(){
    let showLess = document.querySelector("#showLess");
    showLess.style.display = "none";

    let displayType = document.querySelectorAll(".display-type");
    console.log("displayType",displayType);
    for(let i=0; i<displayType.length; i++){
        displayType[i].style.display = "none";
    }

    let showMore = document.querySelector("#showMore");
    showMore.style.display = "block";
}

