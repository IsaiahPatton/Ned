/*
How this works:
    this takes what you write and change it into HTML code (see Sites.js for more info)
How to use:
    NedTool("Name", "Link to site", "Link to image"); <-- This has been replaced (for the most part) with DNedTool
    DNedTool("Name", "Link to image"); <-- This is a direct version of NedTool where the name is taken and the site is set to nedhome.ml/tools/name  
    OutherSite("Name", "Link to site", "Link to image"); <-- Link to outsite site thats not part of the Ned sites
    SocialMedia("Name", "Link to site", "Link to image"); <-- Facebook, Twitter, ex...
    All of the stuff above is a shortcut to Button() ex NedTool() whould be this:
        Button("Name", "url", "NedTool", "image");
*/

// All the images are found on Google with usage rights set to 'Labeled for reuse'.


function AllNedTools() {
   DNedTool("google", "goo.gl/b274CE");
   
   NedTool("Yahoo", "nedhome.ml/tools/google?yahoo", "goo.gl/Tu73C3");
   
   DNedTool("Calculator", "www.free-icons-download.net/images/calculator-logo-73002.png");
   
   //DNedTool("Calendar", "goo.gl/hGkTvi"); Not working
   
   DNedTool("Clock", "goo.gl/V4Zwrh");
   
   NedTool("$ Converter", "nedhome.ml/tools/moneyconverter", "goo.gl/g0vTnM");
   
   DNedTool("Holidays", "nedhome.ml/imgs/tree.png"); //pixabay.com/static/uploads/photo/2015/12/10/17/46/fir-1086772_960_720.png
   
   DNedTool("Radio", "upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Icon_sound_radio.svg/1259px-Icon_sound_radio.svg.png");
   
   DNedTool("Tv", "nedhome.ml/imgs/LAPTOP.png"); //pixabay.com/static/uploads/photo/2013/07/13/01/20/monitor-155565_960_720.png
   
   DNedTool("Piano", "www.publicdomainpictures.net/pictures/30000/velka/piano-notes.jpg");
   
   NedGames();
}
function AllOutherSites() {
    if (window.innerWidth > 601) {
        OutherSite("SUSEStudio", "susestudio.com", "goo.gl/64ozgA"); // PC Only
    }
   
   OutherSite("Weebly", "weebly.com", "upload.wikimedia.org/wikipedia/commons/4/43/Weebly_logo_2013.png");
   
   //Does not fit :(  OutherSite("Youtube", "youtube.com", "t2.gstatic.com/images?q=tbn:ANd9GcQDfL7X2SHlu_A9qhVi4HhJFMFqkX4VBAZL9LS81bJm_RatOoM71KJX9nv3");
   
   OutherSite("Linux", "linux.com", "upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1000px-Tux.svg.png");
   
   OutherSite("CCleaner", "ccleaner.com", "upload.wikimedia.org/wikipedia/en/4/4a/CCleaner_logo_2013.png");
   
   OutherSite("Microsoft", "microsoft.com", "img05.deviantart.net/e1f7/i/2011/251/e/4/microsoft_windows_logo_3000px_by_davidm147-d3hax3m.png");
   
   OutherSite("Wikipedia", "wikipedia.org", "upload.wikimedia.org/wikipedia/commons/7/7a/Nohat-wiki-logo.png");
   
   OutherSite("W3 Schools", "w3schools.com", "w3schools.com/favicon.ico");
   
   OutherSite("ZunoZap", "zunozap.github.io", "zunozap.github.io/images/flash.png");
   
   OutherSite("GitHub", "github.com", "image.flaticon.com/icons/png/512/25/25231.png");
   
   OutherSite("Netflix", "netflix.com", "wpostats.com/img/netflix-logo.png");
   
   OutherSite("eBay", "ebay.com", "upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2000px-EBay_logo.svg.png");
}
function AllSocialMedia() {
   SocialMedia("Facebook", "facebook.com", "upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png");
   
   SocialMedia("Twitter", "twitter.com", "upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/220px-Twitter_bird_logo_2012.svg.png");
   
   SocialMedia("Youtube", "youtube.com", "t2.gstatic.com/images?q=tbn:ANd9GcQDfL7X2SHlu_A9qhVi4HhJFMFqkX4VBAZL9LS81bJm_RatOoM71KJX9nv3");
   
   SocialMedia("Flickr", "flickr.com", "upload.wikimedia.org/wikipedia/commons/9/9b/Flickr_logo.png");
   
   SocialMedia("Google+", "plus.google.com", "upload.wikimedia.org/wikipedia/commons/1/13/Google%2Bapp_icon.png");
   
   SocialMedia("Imgur", "imgur.com", "upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Imgur_logo.svg/2000px-Imgur_logo.svg.png");
   
   SocialMedia("Yahoo Answers", "answers.yahoo.com", "vignette4.wikia.nocookie.net/logopedia/images/7/72/Y!A_7.png/revision/latest?cb=20130813100821");
}
function AllKids() {
    Kids("Disney", "disney.com", "upload.wikimedia.org/wikipedia/commons/4/4c/Walt_Disney_Pictures.png");
    Kids("Nick", "nick.com", "upload.wikimedia.org/wikipedia/commons/8/85/Nick_(Logo).png");
    Kids("CN", "cartoonnetwork.com", "bit.ly/CNLogo"); //The image is from Wikipedia just shortened
    Kids("Safe Google", "nedhome.ml/tools/google?kids", "www.edu.pe.ca/lmmontgomery/Links/images/kid_rex.jpg");
    Kids("GamesFreak", "gamesfreak.net", "static.gamepilot.com/i/c75_themes/gamesfreak/fast-freddy-blue-pale.jpg");
    Kids("Minecraft", "minecraft.net", "alice.violympic.vn/assets/uploads/member/icon_minecraft.png");
    Kids("PBS Kids", "pbskids.org", "grundycenter.lib.ia.us/images/icons/pbskids-logo.png");
    Kids("CoolMath", "www.coolmath-games.com", "www.coolmath-games.com/sites/cmatgame/files/header/cmg-logo-570.png")
    Kids("Poptropica", "www.poptropica.com", "static.poptropica.com/images/home/popv2-head.jpg");
    Kids("FunBrain", "www.funbrain.com", "www.funbrain.com/img/fb-logo-2016.png")
    Kids("Pogo", "pogo.com", "cdn.pogo.com/v/GLSU3A/img/header/new/logo.png");
}
function AllEmails() {
    Email("Gmail", "gmail.com", "vignette4.wikia.nocookie.net/logopedia/images/0/0a/Gmail_logo.png/revision/latest");
    Email("Yahoo Mail", "yahoo.com", "pwnrules.com/wp-content/uploads/2015/11/yahoo-mail-logo.png");
}

function AllSites() {
   AllNedTools();
   
   NewLine("br");
   
   AllOutherSites();
   
   NewLine("br");
   
   AllKids();

   NewLine("br");
   
   AllSocialMedia();
   
   NewLine("br");
   
   AllEmails();
}

function Sites() {

    var l = window.location.href;

    if (l.includes("cat=nedtools")) {
        addHTML("buttons", AllNedTools().toString());
    } else
    if (l.includes("cat=outhersites")) {
        addHTML("buttons", AllOutherSites().toString());
    } else
    if (l.includes("cat=kids")) {
        addHTML("buttons", AllKids().toString());
    } else
    if (l.includes("cat=media")) {
        addHTML("buttons", AllSocialMedia().toString());
    }
    if (l.includes("cat=email")) {
        addHTML("buttons", AllEmails().toString());
    }
    
    AllSites();
}


/* 
 * Do not mess with all of the code below, unless you know what your doing! 
 */

function Button(name, url, type, img) {
    name0 = name.charAt(0);
    name1 = name0.toUpperCase();
    name2 = name.replace(name0, name1);
    if (name2 == "EBay") {
        name2 = "eBay"; // ebay fix
    }
    document.write('<!--' + name +'-->')
    document.write('    <a class="oldbutton" href="http://' + url + '">' + name2);
    document.write('<br>');
    
    if (!window.location.href.includes("nocat=true")) {
        document.write('       <small class="extra2">' + type + '</small><br>');
    }
    
    if (!window.location.href.includes("noimg=true")) {
        document.write('        <img src="http://' + img + '" alt="' + name2 + '" width="88" height="75">');
    }
    
    document.write('    </a> &nbsp;');
}
function NedGames() {
    Button("NedGames", "games.nedhome.ml", "NedGames", "nedhome.ml/imgs/games.png");
}
function B(name, url, type, img) {
    Button(name, url, type, img);
}
function NedTool(name, url, img) {
    Button(name, url, "NedTool", img)
}
function DNedTool(name, img) {
    // If the name of the nedtool is the same as the part after nedhome.ml/tools/ then use this
    NedTool(name, "nedhome.ml/tools/" + name.toLowerCase(), img)
}
function OutherSite(name, url, img) {
    Button(name, url, "Outher Site", img)
}
function SocialMedia(name, url, img) {
    Button(name, url, "Social Media", img);
}
function Kids(name, url, img) {
    Button(name, url, "For Kids", img);
}
function Email(name, url, img) {
    Button(name, url, "Email", img);
}
function NewLine(type) {
    if(type == "p") {
        document.write("</p>")
    } else if(type == "br") {
        document.write("<br>")
    } else if(type == null || type == "") {
        document.write("<br>")
    }
}
function addHTML(id, html) {  
   var ele = document.getElementById(id);  
   ele.innerHTML = html;
   var codes = ele.getElementsByTagName("script");   
   for(var i=0;i<codes.length;i++)  
   {  
       eval(codes[i].text);  
   }  
}  