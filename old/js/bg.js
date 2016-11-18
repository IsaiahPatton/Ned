function backgroundon() {
document.getElementById("bg").innerHTML = '<link rel="stylesheet" type="text/css" href="//n-e-d.github.io/ned/stylesheets/background.css" id="bg">';
document.getElementById("bgenable").innerHTML = '';
document.getElementById("bgdisable").innerHTML = '<nedface id="bgdisable" onclick="backgroundoff()">Disable Background</nedface>';
}

function backgroundoff() {
document.getElementById("bg").innerHTML = '';
document.getElementById("bgenable").innerHTML = '<nedface id="bgenable" onclick="backgroundon()">Enable Background</nedface>';
document.getElementById("bgdisable").innerHTML = '';
}
