var sites = document.getElementById("sites");

function showHide(type) {
    "use strict";
    var x = document.getElementsByClassName(type);
    var i;
    for (i = 0; i < x.length; i++) 
        x[i].style.display = (x[i].style.display == "none") ? "inline-block" : "none";
}

function switchSearch(name, url, a) {
    document.getElementById("web-search").action = url;
    document.getElementById("WS-TXT").name = a;
}

function setCookie(cname, cvalue) {
    "use strict";
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

function checkCookie(cook) {
    return getCookie(cook) != "";
}

function switchS(name, url, a){
    setCookie("searchone", name);
    setCookie("searchtwo", url);
    setCookie("searchthree", a);
    switchSearch(name, url, a);
}

function open(menu) {
    document.getElementById(menu).style.display = "inline-block";
}

if (window.innerWidth < 650) {
    var x = document.getElementsByClassName("button");
    var i;
    for (i = 0; i < x.length; i++)
        x[i].style.padding = "3px 2px";

    var x = document.getElementsByClassName("groupimage");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.width = "25px";
        x[i].style.height = "20px";
    }
}

if (window.innerWidth > 800) {
    var x = document.getElementsByClassName("groupimage");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.width = "35px";
        x[i].style.height = "30px";
    }
}

function searchbar(startup){
    document.getElementById("nhcooke").style.display = "inline-block"; 

    x = document.getElementsByClassName("nh-cooke");
    for (i = 0; i < x.length; i++)
        x[i].style.display = "inline-block";

    if (checkCookie("searchone"))
        switchSearch(getCookie("searchone"), getCookie("searchtwo"), getCookie("searchthree"));
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var pmAm = amOrPm(h);
    var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Friday", "Sat"];
    var mon = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    h = twelvehour(h);
    m = checkTime(m);
    if (window.innerWidth < 450) {
        document.getElementById('theTime').innerHTML = h + ":" + m + "; " + (today.getMonth() + 1) + "/" + today.getDate();
    } else
        document.getElementById('theTime').innerHTML = days[today.getDay()] + ", " + mon[today.getMonth()] + " " + today.getDate() + ", " + h + ":" + m + " " + pmAm;
    var t = setTimeout(startTime, 15000);
}

function amOrPm(i) {
    return i > 12 ? "PM" : "AM";
}

function twelvehour(i) {
    return (i > 12) ? i = i - 12 : i;
}

function checkTime(i) {
    return (i < 10) ? (i = "0" + i) : i; // add zero in front of numbers < 10
}

function openTv() {
    document.getElementById('tvs').src = "http://pluto.tv"; // "tools/tv.html";
    document.getElementById('tvopen').style.display = "none";
}

function closeTv() {
    document.getElementById('tvs').src = "";
    document.getElementById('tv').style.display = "none";
}


searchbar(false);
