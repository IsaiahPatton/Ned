
function showNote() {
    document.getElementById("zunozapnote").innerHTML = "<div class=\"zznote\"><div class=\"zzhead\">Switch to ZunoZap</div>" +
            "<span onclick=\"this.parentElement.style.display=\'none\';\">x</span><div class=\"zznote-container\">"
                + "<p>We recommend using <a href=\"http://zunozap.com/\">ZunoZap</a>, a fast and new web browser. BTry it?</p>"
                + "<a href='http://zunozap.com/'><button>YES</button></a>" +
            "</div></div>";
}

if (!navigator.userAgent.toString().includes("ZunoZap")) showNote();