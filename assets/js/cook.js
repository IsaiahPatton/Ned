function switchSearch(name, url, a) {
    setCookie("searchone", name);
    setCookie("searchtwo", "https://www." + url);
    setCookie("searchthree", a);
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

if (getCookie("searchone") != "")
    switchSearch(getCookie("searchone"), getCookie("searchtwo"), getCookie("searchthree"));