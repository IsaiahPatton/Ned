document.body.style.backgroundImage = "URL('assets/backgrounds/" + (new Date().getDay() + 2) + ".jpg')";

function byId(id) {
    return document.getElementById(id);
}

function open(id) {
    byId(id).style.display = "inline-block";
}

function startTime() {
    var today = new Date();
    var hr;
    var h = (hr = h = today.getHours()) > 12 ? h - 12 : h;
    var m = (m = today.getMinutes()) < 10 ? ("0" + m) : m;
    var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Friday", "Sat"];
    var mon = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    byId('theTime').innerHTML = window.innerWidth < 450 ? 
        h + ":" + m + "; " + (today.getMonth() + 1) + "/" + today.getDate() :
        days[today.getDay()] + ", " + mon[today.getMonth()] + " " + today.getDate() + ", " + h + ":" + m + " " + (hr > 12 ? "PM" : "AM");

    var t = setTimeout(startTime, 15000);
}

function openTv() {
    byId('tvs').src = "https://pluto.tv";
    byId('tvopen').style.display = "none";
}

function closeTv() {
    byId('tvs').src = "";
    byId('tv').style.display = "none";
}