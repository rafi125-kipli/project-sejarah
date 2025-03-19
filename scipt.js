document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul li a");
    let header = document.querySelector("header");
    let expandableSections = document.querySelectorAll(".expandable");

    // 🌟 Efek Fade-in saat Scroll
    function checkScroll() {
        sections.forEach(section => {
            let sectionTop = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 50) {
                section.classList.add("show");
            }
        });
    }

    // 🌟 Smooth Scrolling untuk Menu
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth"
            });
        });
    });

    // 🌟 Efek Parallax Header
    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        header.style.backgroundPositionY = scrollY * 0.5 + "px";
    });

    // 🌟 Klik untuk Expand/Collapse Teks Panjang
    expandableSections.forEach(section => {
        let title = section.querySelector("h2");
        let content = section.querySelector(".content");

        title.addEventListener("click", function () {
            content.classList.toggle("expanded");
            if (content.classList.contains("expanded")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0";
            }
        });
    });

    checkScroll();
    window.addEventListener("scroll", checkScroll);
});
