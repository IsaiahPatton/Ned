//document.getElementById("demo").innerHTML = '<img id="myImage" src="http://i.imgur.com/AP5imrD.png" onclick="nedface()" height="175" width="500">';

function hideface() {
document.getElementById("demo").innerHTML = '';
document.getElementById("hide").innerHTML = '';
document.getElementById("show").innerHTML = '<nedface id="hide" onclick="showface()">Show face</nedface>';
}

function showface() {
document.getElementById("demo").innerHTML = '<img id="myImage" src="http://i.imgur.com/AP5imrD.png" onclick="nedface()" height="175" width="500"><br>';
document.getElementById("hide").innerHTML = '<nedface id="hide" onclick="hideface()">Hide face</nedface>';
document.getElementById("show").innerHTML = '';
}

function hbox() {
document.getElementById("inside").innerHTML = '';
document.getElementById("hbox").innerHTML = '';
document.getElementById("sbox").innerHTML = '<nedface id="sbox" onclick="sbox()">Show Settings</nedface>';
}

function sbox() {
document.getElementById("inside").innerHTML = document.getElementById("insideText").innerHTML;
document.getElementById("hbox").innerHTML = '<nedface id="hbox" onclick="hbox()">Hide Settings</nedface>';
document.getElementById("sbox").innerHTML = '';
}
