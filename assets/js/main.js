var sites = document.getElementById("sites");
var nedhome = "n-e-d.github.io";

function b(type, name, url) {
    "use strict";
    var image = type.toString().toLowerCase() + "/"  + name.toString().replace(" ", "-").replace("$", "money").toLowerCase();
    var text = '<a href="http://' + url + '" class="' + type + ' button">' + name + "<br>" + '<small class="small">' + type + "</small><br>" + '<img src="assets/images/' + image + '.png" alt="' + name + '" width="70" height="55">' + "</a>";

    document.getElementById("sites").innerHTML = document.getElementById("sites").innerHTML + text;
}

function bJS(type, name, jsCode) {
    "use strict";
    var image = name.toString().replace(new RegExp(" ", 'g'), "-").toLowerCase();
    var text = '<a href="javascript:open(\'' + jsCode + '\');" class="' + type + ' button">' + name + "<br>" + '<small class="small">' + type + "</small><br>" + '<img src="assets/images/' + type.toString().toLowerCase() + "/" + image + '.png" alt="' + name + '" width="70" height="55">' + "</a>";

    document.getElementById("sites").innerHTML = document.getElementById("sites").innerHTML + text;
}

/* Catagory: NedApp/NedTools */
sites.innerHTML = sites.innerHTML + "<br>";

bJS("NedApp", "Tv", "tv");
bJS("NedApp", "Piano", "piano");
bJS("NedApp", "Translator", "translator");
bJS("NedApp", "QR creator", "qrgen");

/* Catagory: SocialMedia */
/* Catagory: Games / Cartoons */
/* Catagory: Outher
/* Catagory: Email */

function showHide(type) {
    "use strict";
    var x = document.getElementsByClassName(type);
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display == "none") {
            x[i].style.display = "inline-block";
        } else
            x[i].style.display = "none";
    }
}

function switchSearch(name, url, a) {
    document.getElementById("web-search").action = url;
    document.getElementById("WS-TXT").name = a;
}

function setCookie(cname, cvalue) {
    "use strict";
    var d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
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
    var user = getCookie(cook);
    return user != "";
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

function advancedsearch(tagname) {
    if (getCookie("advancedsearch").toString().includes("disable")) {
        searchbar(true);
        document.getElementById("ase").style.display = "none";
        document.getElementById("asd").style.display = "inline-block";
        document.getElementById("advancedsearche").style.display = "inline-block";
        setCookie("advancedsearch", "enabled");
    } else {
        document.getElementById("nocook").style.display = "inline-block";
        document.getElementById("nhcooke").style.display = "none";
        document.getElementById("asd").style.display = "none";
        document.getElementById("ase").style.display = "inline-block";
        document.getElementById("advancedsearche").style.display = "none";
        setCookie("advancedsearch", "disabled");
    }
}

function searchbar(startup){
    if (getCookie("advancedsearch").toString().includes("enable") || startup || window.location.protocol == "file:") {
        document.getElementById("nocook").style.display = "none";
        document.getElementById("nhcooke").style.display = "inline-block"; 

        var x = document.getElementsByClassName("nocook");
        var i;
        for (i = 0; i < x.length; i++)
            x[i].style.display = "none";

        x = document.getElementsByClassName("nh-cooke");
        for (i = 0; i < x.length; i++)
            x[i].style.display = "inline-block";

        if (checkCookie("searchone"))
            switchSearch(getCookie("searchone"), getCookie("searchtwo"), getCookie("searchthree"));
    }
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
    document.getElementById('theTime').innerHTML = days[today.getDay()] + ", " + mon[today.getMonth()] + " " + today.getDate() + ", " + h + ":" + m + " " + pmAm;
    var t = setTimeout(startTime, 15000);
}

function amOrPm(i) {
    if (i > 12) {return "PM"};
    return "AM";
}

function twelvehour(i) {
    if (i > 12) { i = i - 12};
    return i;
}

function checkTime(i) {
    if (i < 10) i = "0" + i;  // add zero in front of numbers < 10
    return i;
}

function group() {
    var i = 0;
    var group = arguments[0]; // group name
    //var border = arguments[1]; // include border?
    var html = "<div class='group'>" + group + "<br>";

    for (i = 1; i < arguments.length; i++) {
        // group
        var res = arguments[i].split("[:]");
        var elname = "<figcaption>" + res[0] + "</figcaption></figure>";
        if (res.length < 3)
            elname = "";

        var image = group.toString().toLowerCase() + "/"  + res[0].toString().replace(" ", "-").replace("$", "money").toLowerCase();
        var text = '<figure><a href="http://' + res[1] + '">' + '<img src="assets/images/' + image + '.png" alt="' + res[0];

        if (res.length < 3) {
            text += '" width="30" height="25">' + "</a>";
        } else {
            text += '" width="30" height="25">' + "</a>";
        }

        text += elname + " ";
        html = html + text;
        var argl = arguments.length + 1;
        if (arguments.length > 6) {
            if (i >= (argl / 2) && i < ((argl / 2) + 1)) {
                html += "<br>";
            }
        }
    }
    html = html + "</div>"
    document.getElementById("sites").innerHTML = document.getElementById("sites").innerHTML + html +
        html.toString().replace(/</g, '&#60;');
}

if (!checkCookie("advancedsearch")) {
    setCookie("advancedsearch", "enabled");
}

searchbar(false);
