function showNotify() {
    var x = document.getElementById("notify");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}
