var OL = 0, num = 0, numOnEveryLine = null;
var sites = document.getElementById("sites");
var nedhome = "n-e-d.github.io";

/* Catagory: NedApp/NedTools */
sites.innerHTML = sites.innerHTML + "<br>";
bJS("NedApp", "Google", "switchSearch('Google', 'http://www.google.com/search', 'q');");
bJS("NedApp", "Yahoo", "switchSearch('Yahoo', 'http://www.yahoo.com/search', 'p');");
b("NedApp", "Calculator", nedhome+"/tools/calculator");
b("NedApp", "Clock", nedhome+"/tools/clock");
b("NedApp", "$ Converter", nedhome+"/tools/moneyconverter");
b("NedApp", "Holidays", nedhome+"/tools/holidays");
b("NedApp", "Radio", nedhome+"/tools/radio");
b("NedApp", "Tv", nedhome+"/tools/tv");
b("NedApp", "Piano", nedhome+"/tools/piano");

/* Catagory: SocialMedia */
sites.innerHTML = sites.innerHTML + "<br>";
b("SocialMedia", "Facebook", "facebook.com");
b("SocialMedia", "Twitter", "twitter.com");
b("SocialMedia", "Youtube", "youtube.com");
b("SocialMedia", "Flickr", "flickr.com");
b("SocialMedia", "Google+", "plus.google.com");
b("SocialMedia", "Imgur", "imgur.com");
b("SocialMedia", "Yahoo A.", "answers.yahoo.com");
b("SocialMedia", "Snapchat", "snapchat.com");
b("SocialMedia", "Instagram", "instagram.com");

/* Catagory: Kids */
sites.innerHTML = sites.innerHTML + "<br>";
b("Kids", "Disney", "disney.com");
b("Kids", "Nick", "nick.com");
b("Kids", "CN", "cartoonnetwork.com");
bJS("Kids", "KidRex", "switchSearch('KidRex', 'http://www.kidrex.org/results/', 'q');");
b("Kids", "GamesFreak", "gamesfreak.net");
b("Kids", "Minecraft", "www.minecraft.net");
b("Kids", "PBS", "pbskids.org");
b("Kids", "CoolMath", "www.coolmath-games.com")
b("Kids", "Poptropica", "www.poptropica.com");
b("Kids", "FunBrain", "www.funbrain.com");
b("Kids", "Pogo", "pogo.com");

/* Catagory: Outher */
sites.innerHTML = sites.innerHTML + "<br>";
b("Outher", "Weebly", "weebly.com");
b("Outher", "CCleaner", "ccleaner.com");
b("Outher", "Microsoft", "microsoft.com");
b("Outher", "Wikipedia", "wikipedia.org");
b("Outher", "GitHub", "github.com");
b("Outher", "Netflix", "netflix.com");
b("Outher", "eBay", "ebay.com");
b("Outher", "ZunoZap", "zunozap.github.io");

/* Catagory: Email */
sites.innerHTML = sites.innerHTML + "<br>";
b("Email", "Gmail", "gmail.com");
b("Email", "Yahoo Mail", "yahoo.com");


function b(type, name, url, jsCode) {
    num++;

    var image = name.toString().replace(" ", "-").replace("$", "money").toLowerCase();
    var text = '<a href="http://'+url+'" class="'+type+' button">'+name+"<br>" + '<small class="small">'+type+ "</small><br>" + '<img src="assets/images/'+type.toString().toLowerCase()+"/"+image+'.png" alt="'+name+'" width="70" height="55">' + "</a>";

    document.getElementById("sites").innerHTML = document.getElementById("sites").innerHTML + text;
}

function bJS(type, name, jsCode) {
    num++;

    var image = name.toString().replace(" ", "-").toLowerCase();
    var text = '<a href="#" onClick="'+jsCode+'" class="'+type+' button">'+name+"<br>" + '<small class="small">'+type+ "</small><br>" + '<img src="assets/images/'+type.toString().toLowerCase()+"/"+image+'.png" alt="'+name+'" width="70" height="55">' + "</a>";

    document.getElementById("sites").innerHTML = document.getElementById("sites").innerHTML + text;
}

function showHide(type) {
    var x = document.getElementsByClassName(type);
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display == "none") {
            x[i].style.display = "inline-block";
        } else {
            x[i].style.display = "none";
        }
    }
}

function switchSearch(name, url, a) {
    document.getElementById('search').style.display = 'block'; 
    document.getElementById("form").action = url;
    document.getElementById("input").name = a;
    document.getElementById("buttonText").value = name + " Search";
}


if (window.innerWidth < 500) {
    var x = document.getElementsByClassName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.padding = "5px 4px";
    }
}


