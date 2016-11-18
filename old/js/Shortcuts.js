function write(text) {
    document.write(text);
}
function URL() {
    return window.location.href;
}
function isURL(url) {
    return window.location.href == url;
}
function SetURL(url) {
    if (url == "https://nedhome.ml") {
      url == "http://nedhome.ml";
      window.location.href == "http://nedhome.ml";
    } else {
      window.location.href == url;
    }
}
