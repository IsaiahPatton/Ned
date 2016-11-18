function footer() {
    document.write('<br>');
    document.write('<hr>');
    document.write('<CENTER>');
    document.write(' <small class="extra2">');
    document.write('   <p class="repo-owner" style="color:black">');
    document.write('    <a href="https://github.com/n-e-d/ned">Ned</a> is maintained by <a href="https://github.com/IsaiahPatton">Isaiah Patton</a>,');
    document.write('    This page was generated using modifyed version of the Architect theme by <a href="https://twitter.com/jasonlong">Jason Long</a>');
    document.write('   </p>');
    document.write(' </small>');
    document.write('</ul>');
    document.write('<!--Fork on Github--><a class="github-button" href="https://github.com/n-e-d/ned/fork" data-style="mega" data-count-href="/n-e-d/ned/network" data-count-api="/repos/n-e-d/ned#forks_count" data-count-aria-label="# forks on GitHub" aria-label="Fork ned on GitHub">Fork</a>');
    document.write('&nbsp;')
    document.write('<!--Report bug on Github--><a class="github-button" href="https://github.com/n-e-d/ned/issues" data-icon="octicon-issue-opened" data-style="mega" data-count-api="/repos/n-e-d/ned#open_issues_count" data-count-aria-label="# issues on GitHub" aria-label="Issue ned on GitHub">Report Issue</a></p>')
    document.write('    <script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script></footer>');
}
function nedsettings() {
    document.write('<script type="text/javascript" src="http://n-e-d.github.io/ned/js/settings.js"></script>');
    document.write('<nedsettings id="sbox" onclick="sbox()">Show Settings</nedsettings>');
    document.write('<nedsettings id="hbox" onclick="hbox()"></nedsettings>');
    document.write('<nedsettings id="inside"></nedsettings>');
    document.write('<nedsettings id="insideText">');
    document.write('   <nedface id="hide" onclick="hideface()">Hide face</nedface>');
    document.write('   <nedface id="show"><!--This will be replace Hide Face when you click Hide--></nedface>');
    document.write('   <!--nedface id="bgdisable" onclick="backgroundoff()">Disable Background</nedface>');
    document.write('   <nedface id="bgenable"></nedface>-->');
    document.write('</nedsettings>');
    document.write('<script type="text/javascript" src="http://n-e-d.github.io/ned/js/bg.js"></script>');
    document.write('<script type="text/javascript" src="http://n-e-d.github.io/ned/js/settings.js"></script>');
    document.write('<br>');
}
function outhersites() {
    document.write('<nedpages>');
    document.write('  <a href="http://nedhome.ml" class="active">Ned</a>');
    document.write('  <a href="http://isaiahpatton.github.io/monopoly">HTML Monopoly</a>');
    document.write('  <a href="http://dev.bukkit.org/bukkit-plugins/BSwear/">BSwear</a>');
    document.write('  <a href="http://dev.bukkit.org/bukkit-plugins/AFK/">AFK</a>');
    document.write('  <a href="http://isaiahpatton.blogspot.com">Blog</a>');
    document.write('</nedpages>');
    document.write('</body>');
    document.write('</nedbuttons>');
}
