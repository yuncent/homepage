    document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    video.addEventListener('contextmenu', function(event) {
        event.preventDefault(); 
    });
});


document.writeln("<table align=\'center\' border=\'0\' width=\'1024px\' >");
document.writeln("  <tr>");
document.writeln("  <td align=\'center\'><a href=\'https://sxso.cn/\'><video src=\'im/helloworld.mp4\' style=\'mix-blend-mode: screen; display: block\' width=\'480\' height=\'309\' align=\'middle\' title=\'欢迎进入云彩天际网站\' autoplay muted loop ></video></a></td>");
document.writeln("  </tr> ");
document.writeln("</table>");
