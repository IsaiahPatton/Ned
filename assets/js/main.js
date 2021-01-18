function finishLoad() {
    var is = document.getElementsByTagName("img");
    for (var i = 0; i < is.length; i++)
        if (is[i].getAttribute("asrc") != null)
            is[i].src = is[i].getAttribute("asrc");

    //document.body.style.backgroundImage = "URL('assets/backgrounds/" + (new Date().getDay() + 1) + ".webp')";
    browserResized();
}

function browserResized() {
    document.body.style.backgroundSize = window.innerWidth + "px " + window.innerHeight + "px";
}
window.onresize = browserResized

function byId(id) {return document.getElementById(id);}

function open(id) {
    byId(id).style.display = "inline-block";
    byId("ad").innerHTML = "<iframe src='ad.html' width='100%' frameborder='0'></iframe>";
    byId("calc").innerHTML = "<iframe class='calc' width='200px' height='243' src='tools/calculator.html' frameborder='0'></iframe>";
}

function setSearch(url) {
    if (url != "") {
        setCookie("surl", url);
        byId("search").action = "https://" + url;
    }
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
    setSearch(getCookie("surl"));