var cityListJSONKey = Object.keys(cityList),
    elementString = "",
    cityListLength = cityListJSONKey.length;

// Gererate element for movie list card
for(var i = 0; i <= cityListLength - 1; i++){
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
    elementString +=        '<button class="viewTrailer" data-id="'+cityList[cityListJSONKey[i]].EventCode+'">View Trailer</button>'
                        +'</div>'
                        +'<div class="card-footer">'
                            +'<h5>'+cityList[cityListJSONKey[i]].EventTitle+'</h5>'
                        +'</div>'
                    +'</div>';
}
document.getElementsByClassName('trailer-container')[0].innerHTML = elementString;

// Add event for cancel button which is in the trailer container
var calcelEvent = document.getElementById('cancel');
function removeTrailer(){
    document.getElementById('videoContainer').remove();
}
var viewTrailer = document.getElementsByClassName('viewTrailer');
for (var i = 0; i < viewTrailer.length; i++) {
    viewTrailer[i].addEventListener('click', showTrailer);
}
for(var i = 0; i <= cityListLength - 1; i++){
    var myObject = document.getElementsByClassName('hidden-div')[i];
    myObject.addEventListener("mouseenter", setOpacity);
    myObject.addEventListener("mouseleave", removeOpacity);
}
function showTrailer(event){
    var trailerId = event.target.getAttribute("data-id"),
        trailerButtonCoordinate = event.target.getBoundingClientRect(),
        rowFirstElementId = document.elementFromPoint(68, trailerButtonCoordinate.y).parentElement.getAttribute('id'),
        trailerDetails = cityList[trailerId];
        if(document.getElementById('videoContainer') != null){
            document.getElementById('videoContainer').remove();
        }
    var list = document.getElementsByClassName("trailer-container")[0],
        el = document.getElementById(rowFirstElementId),
        nodes = Array.prototype.slice.call(list.children),
        elIndex = nodes.indexOf(el),
        elementDiv = document.createElement('div'),
        trailerURL = trailerDetails.TrailerURL.substr(trailerDetails.TrailerURL.indexOf("v=")+2, trailerDetails.TrailerURL.length);
        console.log(trailerButtonCoordinate);
    if(trailerURL.indexOf("&") > -1){
        trailerURL = trailerURL.substr(0, trailerURL.indexOf("&"));
    }
    elementDiv.id = 'videoContainer';
    var e = document.createElement('div');
    e.id = 'video-placeholder'
    elementDiv.appendChild(e);
    var spanEle = document.createElement('span');
    spanEle.innerHTML = "x";
    spanEle.id = 'cancel';
    spanEle.onclick = removeTrailer;
    elementDiv.appendChild(spanEle);
    list.insertBefore(elementDiv, list.childNodes[elIndex]);
    
    // For use youtube video in my page
    player = new YT.Player('video-placeholder', {
        width: 790,
        height: 500,
        videoId: trailerURL,
        playerVars: {
            color: 'white',
        },
        events: {
        }
    });
    document.getElementById('videoContainer').scrollIntoView(true);
}
function setOpacity(event){
    event.target.previousElementSibling.style.opacity = 0.3;
    event.target.previousElementSibling.style.border = '6px solid green';
}
function removeOpacity(event){
    event.target.previousElementSibling.style.opacity = 1;
    event.target.previousElementSibling.style.border = '6px solid #FFF';
}