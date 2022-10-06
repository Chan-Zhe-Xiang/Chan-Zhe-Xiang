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

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
    // console.log(e)
});

window.addEventListener("scroll", () => {
    const fromTop = cursor.getAttribute("data-fromTop");
    cursor.style.top = scrollY + parseInt(fromTop) + "px";
    console.log(scrollY);
});

window.addEventListener("click", () => {
    if (cursor.classList.contains("click")) {
        cursor.classList.remove("click");
        void cursor.offsetWidth; // trigger a DOM reflow
        cursor.classList.add("click");
    } else {
        cursor.classList.add("click");
    }
});
