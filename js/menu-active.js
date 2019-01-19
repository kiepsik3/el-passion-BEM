var links = document.getElementsByClassName("nav-list__link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("nav-list__link--is-active");
        current[0].className = current[0].className.replace(" nav-list__link--is-active", "");
        this.className += " nav-list__link--is-active";
    });
}
