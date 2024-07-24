function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var elementHeight = reveals[i].getBoundingClientRect().top;
        var windowHeight = document.documentElement.clientHeight;
        if (elementHeight < windowHeight / 1.5) {
            reveals[i].style.opacity = "1"; // 当元素进入视口时，使其渐显
        } else {
            reveals[i].style.opacity = "0"; // 当元素离开视口时，使其渐隐
        }
    }
}

function leftin() 
{
    var leftinElements = document.querySelectorAll(".leftin");
    for (var i = 0; i < leftinElements.length; i++) {
        var elementHeight = leftinElements[i].getBoundingClientRect().top;
        var windowHeight = document.documentElement.clientHeight;
        if (elementHeight < windowHeight / 1.5) {
            leftinElements[i].style.opacity = "1"; // 使元素可见
            if (!leftinElements[i].classList.contains("slide-in-bck-left1")) {
                leftinElements[i].classList.add("slide-in-bck-left1");
            }
        } else {
            leftinElements[i].style.opacity = "0"; // 使元素不可见
            leftinElements[i].classList.remove("slide-in-bck-left1");
        }
    }
}
function blurtop() 
{
    var leftinElements = document.querySelectorAll(".leftin1");
    for (var i = 0; i < leftinElements.length; i++) {
        var elementHeight = leftinElements[i].getBoundingClientRect().top;
        var windowHeight = document.documentElement.clientHeight;
        if (elementHeight < windowHeight / 1.5) {
            leftinElements[i].style.opacity = "1"; // 使元素可见
            if (!leftinElements[i].classList.contains("slide-in-blurred-top")) {
                leftinElements[i].classList.add("slide-in-blurred-top");
            }
        } else {
            leftinElements[i].style.opacity = "0"; // 使元素不可见
            leftinElements[i].classList.remove("slide-in-blurred-top");
        }
    }
}

window.addEventListener("scroll", function() {
    reveal();
    leftin();
    blurtop();
});
window.addEventListener("load", function() {
    reveal();
    leftin();
    blurtop();
});


