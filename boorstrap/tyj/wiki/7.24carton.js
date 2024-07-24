function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++){
        var elementHeight = reveals[i].getBoundingClientRect().top;
        var windowHeight = document.documentElement.clientHeight;
        if (elementHeight < windowHeight / 1.5) {
            reveals[i].style.opacity = "1";
        }
        else {
            reveals[i].style.opacity = "0";
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();