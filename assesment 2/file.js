console.log(cityList);
var cityListJSONKey = Object.keys(cityList);
console.log(cityListJSONKey.length);
var elementString = "";
for(var i = 0; i <= 59; i++){
    var posterImage = cityList[cityListJSONKey[i]].EventCode != undefined ? "https://in.bmscdn.com/events/moviecard/"+cityList[cityListJSONKey[i]].EventCode+".jpg" : "";
    elementString += '<div class="movie-container" id="'+cityList[cityListJSONKey[i]].EventCode+'">'
                        +'<img src="'+posterImage+'" class="movie-poster"/>'
                        +'<div class="hidden-div">';
    var categoryArr = cityList[cityListJSONKey[i]].EventGenre.split('|');
    var categoryArrLength = categoryArr.length;
    for(var j = 0; j <= categoryArrLength - 1; j++){
        if(j < categoryArrLength){
            elementString += '<span>'+categoryArr[j]+'</span><br>';
        }else{
            elementString += '<span>'+categoryArr[j]+'</span>';
        }
    }
    elementString +=        '<button class="viewTrailer">View Trailer</button>'
                        +'</div>'
                    +'</div>';
}
document.getElementsByClassName('trailer-container')[0].innerHTML = elementString;

for(var i = 0; i <= 59; i++){
    var myObject = document.getElementsByClassName('hidden-div')[i];
    myObject.addEventListener("mouseenter", setOpacity);
    myObject.addEventListener("mouseleave", removeOpacity);
   
}
function setOpacity(event){
    event.target.previousElementSibling.style.opacity = 0.3;
    event.target.previousElementSibling.style.border = '6px solid green';
}
function removeOpacity(event){
    event.target.previousElementSibling.style.opacity = 1;
    event.target.previousElementSibling.style.border = '6px solid #FFF';
}