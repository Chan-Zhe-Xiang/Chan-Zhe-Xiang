let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.transitionDelay = "0.2s";
    } else {
        document.getElementById("navbar").style.top = "-350px";
    }
    prevScrollpos = currentScrollPos;
    if (currentScrollPos == 0) {
        document.getElementById("navbar").classList.remove("navbar-down");
        document.getElementById("navbar").classList.add("navbar-top");
    } else {
        document.getElementById("navbar").classList.remove("navbar-top");
        document.getElementById("navbar").classList.add("navbar-down");
    }
};
