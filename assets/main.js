function finishLoad(){/*document.body.style.backgroundImage = "URL('assets/backgrounds/7.png')";*/}
function byId(id){return document.getElementById(id);}
function open(id){byId(id).style.display="inline-block";byId("ad").innerHTML="<iframe src='ad.html' width='100%' frameborder='0'></iframe>";}
function setSearch(url){setCookie("surl", url); if (url != "") byId("search").action = url;}
function setCookie(cname,cvalue){var d=new Date();d.setTime(d.getTime()+(30*24*60*60*1000));document.cookie = cname+"="+cvalue+"; "+"expires="+d.toGMTString();}
function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0; i < ca.length; i++){var c=ca[i];while (c.charAt(0) == ' '){c = c.substring(1);} if (c.indexOf(name) == 0) return c.substring(name.length, c.length);}return "";}

if (getCookie("surl")!="") setSearch(getCookie("surl"));