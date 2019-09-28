document.body.style.backgroundImage = "URL('assets/backgrounds/" + (new Date().getDay() + 1) + ".jpg')";

function byId(id) {
    return document.getElementById(id);
}

function open(menu) {
    byId(menu).style.display = "inline-block";
}

if (window.innerWidth < 650) {
    var x = document.getElementsByClassName("searchSwitch");
    var i;
    for (i = 0; i < x.length; i++)
        x[i].style.padding = "3px 2px";
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var pmAm = h > 12 ? "PM" : "AM";
    var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Friday", "Sat"];
    var mon = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    h = (h > 12) ? h - 12 : h;
    m = (m < 10) ? ("0" + m) : m;

    if (window.innerWidth < 450) {
        byId('theTime').innerHTML = h + ":" + m + "; " + (today.getMonth() + 1) + "/" + today.getDate();
    } else
        byId('theTime').innerHTML = days[today.getDay()] + ", " + mon[today.getMonth()] + " " + today.getDate() + ", " + h + ":" + m + " " + pmAm;
    var t = setTimeout(startTime, 15000);
}

function openTv() {
    byId('tvs').src = "http://pluto.tv"; // "tools/tv.html";
    byId('tvopen').style.display = "none";
}

function closeTv() {
    byId('tvs').src = "";
    byId('tv').style.display = "none";
}