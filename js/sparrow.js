
/* carousel */
let index = 0;
function showSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    index = (n + totalSlides) % totalSlides;  // 確保索引在範圍內
    slides.style.transform = 'translateX(' + (-index * 100) + '%)'; // 滑動效果
}
document.getElementById('prevBtn').onclick = function() {
    showSlide(index - 1);
};
document.getElementById('nextBtn').onclick = function() {
    showSlide(index + 1);
};
// 自動播放
setInterval(() => {
    showSlide(index + 1);
}, 6000);  // 每6秒自動切換

/* fetch API */
let authorization  = cwaApi;
let src = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001";  // 今明 36 小時天氣預報
src += "?authorization=" + authorization;  // 加入參數 authorization

async function getWeatherData(){
    let response = await fetch(src);
    let data = await response.json();
    let location = data.records.location;
    let city = document.querySelector("#cities");
    city.innerHTML = "";
    location.forEach((loc,i) => {
        let special = ["臺北市", "高雄市","新北市", "臺中市", "臺南市", "桃園市"];
        if (special.includes(loc.locationName)){
            city.innerHTML += "<li class='btn-blue center' onclick(" + ")>" + loc.locationName + "</li>"
        }else{
            city.innerHTML += "<li class='btn-blue center display-type' onclick(" + ")>" + loc.locationName + "</li>"
        }
    });
    console.log(location[5].weatherElement);
    let weather = document.querySelector("#weather");
    location[5].weatherElement.forEach((i) =>{
        console.log(i.time);
    })
    weather.innerHTML += "";
}

document.addEventListener('DOMContentLoaded', getWeatherData());


/*  */
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
