var OL = 0, num = 0, nameArray = [], typeArray = [], urlArray = [], numOnEveryLine = null;
var sites = document.getElementById("sites");

/* Catagory: NedApp/NedTools */
sites.innerHTML = sites.innerHTML + "<br>";
b("NedApp", "Google", "nedhome.ml/tools/google");
b("NedApp", "Yahoo", "nedhome.ml/tools/google?yahoo");
b("NedApp", "Calculator", "nedhome.ml/tools/calculator");
b("NedApp", "Clock", "nedhome.ml/tools/clock");
b("NedApp", "$ Converter", "nedhome.ml/tools/moneyconverter");
b("NedApp", "Holidays", "nedhome.ml/tools/holidays");
b("NedApp", "Radio", "nedhome.ml/tools/radio");
b("NedApp", "Tv", "nedhome.ml/tools/tv");
b("NedApp", "Piano", "nedhome.ml/tools/piano");

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
b("Kids", "KidRex", "nedhome.ml/tools/google?kids");
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


function b(type, name, url) {
    nameArray[nameArray.length] = name;
    typeArray[typeArray.length] = type;
    urlArray[urlArray.length] = url;
    num++;
    
    var image = name.toString().replace(" ", "-").replace("$", "money").toLowerCase();
    var text = '<a href="http://'+url+'" class="'+type+' button">'+name+"<br>" + '<small class="small">'+type+ "</small><br>" + '<img src="images/'+type.toString().toLowerCase()+"/"+image+'.png" alt="'+name+'" width="70" height="55">' + "</a>";
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


