
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
    let locElement = document.querySelector("#loc");
    let weatherElement = document.querySelectorAll(".cube");
    let cityElement = document.querySelector("#cities");
    console.log(location[5].locationName);
    locElement.innerHTML += location[5].locationName;  // 臺北市
    console.log(weatherElement);
    
    weatherElement[0].innerHTML = "<h4>" + location[5].weatherElement[0].time[0].startTime + "</h4><h4>" + location[5].weatherElement[0].time[0].endTime + "</h4>" + 
                                "<div>" + location[5].weatherElement[2].time[0].parameter.parameterName + "°C - " + location[5].weatherElement[4].time[0].parameter.parameterName + "°C</div>" +
                                "<div>"+ location[5].weatherElement[0].time[0].parameter.parameterName +"</div>"+
                                "<div>降雨機率 : " + location[5].weatherElement[1].time[0].parameter.parameterName + "%</div>"+
                                "<div>" + location[5].weatherElement[3].time[0].parameter.parameterName + "</div>";
    weatherElement[1].innerHTML = "<h4>" + location[5].weatherElement[0].time[1].startTime + "</h4><h4>" + location[5].weatherElement[0].time[1].endTime + "</h4>" + 
                                "<div>" + location[5].weatherElement[2].time[1].parameter.parameterName + "°C - " + location[5].weatherElement[4].time[1].parameter.parameterName + "°C</div>" +
                                "<div>"+ location[5].weatherElement[0].time[1].parameter.parameterName +"</div>"+
                                "<div>降雨機率 : " + location[5].weatherElement[1].time[1].parameter.parameterName + "%</div>"+
                                "<div>" + location[5].weatherElement[3].time[1].parameter.parameterName + "</div>";
    weatherElement[2].innerHTML = "<h4>" + location[5].weatherElement[0].time[2].startTime + "</h4><h4>" + location[5].weatherElement[0].time[2].endTime + "</h4>" + 
                                "<div>" + location[5].weatherElement[2].time[2].parameter.parameterName + "°C - " + location[5].weatherElement[4].time[2].parameter.parameterName + "°C</div>" +
                                "<div>"+ location[5].weatherElement[0].time[2].parameter.parameterName +"</div>"+
                                "<div>降雨機率 : " + location[5].weatherElement[1].time[2].parameter.parameterName + "%</div>"+
                                "<div>" + location[5].weatherElement[3].time[2].parameter.parameterName + "</div>";


    location[5].weatherElement.forEach((i) =>{
        console.log(i);
    })

    // location.forEach(loc => {
    //     city.innerHTML += "<div>" + loc.locationName + " : " + loc.weatherElement[2].time[0].parameter.parameterName + " ~ " + loc.weatherElement[4].time[0].parameter.parameterName + " °C" + "</div>"
    // });
    

    // 生成 Button Tag 
    location.forEach((loc,i) => {
        let special = ["臺北市", "高雄市","新北市", "臺中市", "臺南市", "桃園市"];
        loc.innerHTML = "";
        if (special.includes(loc.locationName)){
            cityElement.innerHTML += "<li class='btn-blue center' onclick=showData(" + i + ")>" + loc.locationName + "</li>"
        }else{
            cityElement.innerHTML += "<li class='btn-blue center display-type' onclick=showData(" + i + ")>" + loc.locationName + "</li>"
        }
    });
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
