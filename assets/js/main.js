document.body.style.backgroundImage = "URL('assets/backgrounds/" + (new Date().getDay() + 1) + ".jpg')";
document.body.style.backgroundSize = window.innerWidth + "px " + window.innerHeight + "px";

function browserResized() {
    document.body.style.backgroundSize = window.innerWidth + "px " + window.innerHeight + "px";
}

window.onresize = browserResized

function byId(id) {
    return document.getElementById(id);
}

function open(id) {
    byId(id).style.display = "inline-block";
    document.getElementById("ad").innerHTML = "<iframe src='ad.html' width='100%'></iframe>";
}

function startTime() {
    var today = new Date();
    var hr;
    var h = (hr = h = today.getHours()) > 12 ? h - 12 : h;
    var m = (m = today.getMinutes()) < 10 ? ("0" + m) : m;
    var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Friday", "Sat"];
    byId('theTime').innerHTML = days[today.getDay()] + " " + h + ":" + m + " " + (hr > 11 ? "PM" : "AM");

    var t = setTimeout(startTime, 15000);
}

function switchSearch(url) {
    setCookie("surl", url);
    byId("search").action = "https://" + url;
}

function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = cname + "=" + cvalue + "; " + "expires=" + d.toGMTString();
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);

        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

if (getCookie("surl") != "")
    switchSearch(getCookie("surl"));