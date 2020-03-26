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
    byId('theTime').innerHTML = days[today.getDay()] + " " + h + ":" + m + " " + (hr > 11 ? "PM" : "AM");

    var t = setTimeout(startTime, 15000);
}

function switchSearch(url) {
    setCookie("surl", url);
    document.getElementById("search").action = "https://" + url;
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

function showNote() {
    document.getElementById("zunozapnote").innerHTML = "<div class=\"zznote\"><div class=\"zzhead\">Switch to ZunoZap</div>" +
            "<span onclick=\"this.parentElement.style.display=\'none\';\">x</span><div class=\"zznote-container\">"
                + "We recommend using <a href=\"http://zunozap.com/\">ZunoZap</a>, a fast and new web browser. Try it?</p>"
                + "<a href='http://zunozap.com/'><button>YES</button></a></div></div>";
}
if (!(navigator.userAgent.toString().includes("ZunoZap") || navigator.userAgent.toString().includes("hi"))) showNote();