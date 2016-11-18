function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user == null || user == "") {
        document.write("&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ");
    }
    
    if (user != "") {
        document.write("<displayname syle='color:black'>" + "Welcome again " + user + "</displayname>");
    } else {
       //user = prompt("Please enter your name:","");
       user = "OLD_NED, This version does not work on mobile!";
       if (user != "" && user != null) {
           setCookie("username", user, 30);
           document.write("<displayname syle='color:black'>" + "Welcome again " + user + "</displayname>");
       }
    }
}

function resetName() {
    user = prompt("Please enter your new name:","");
    setCookie("username", user, 30);
}

function gotoProfile() {
    window.location.href = "http://nedhome.ml/profile";
}

