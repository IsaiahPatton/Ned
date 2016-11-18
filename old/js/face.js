/*
function nedface() {
    var image = document.getElementById('myImage');
    if (image.src.match("http://i.imgur.com/AP5imrD.png")) {
        image.src = "http://n-e-d.github.io/ned/imgs/ned.gif";
    } else {
        image.src = "http://i.imgur.com/AP5imrD.png";
    }
}
*/
function loadFace() {
    if (!window.location.href.includes("noface=true")) {
        document.write('<img id="myImage" src="http://i.imgur.com/AP5imrD.png" onclick="nedface()" height="175" width="500">');
    }
}

