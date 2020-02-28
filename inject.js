var url = document.querySelector("video source").src;
var rel_path = url.substr(0,url.lastIndexOf("/")+1);
var xmlhttp = new XMLHttpRequest();
var content = "";
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        content = this.responseText;
    }
};
xmlhttp.open("GET", url, false);
xmlhttp.send();

var main = document.getElementById("region-main")
var url = content.split("\n").filter(line => !line.startsWith("#"))[0]
main.before("Url for VLC", rel_path+url)