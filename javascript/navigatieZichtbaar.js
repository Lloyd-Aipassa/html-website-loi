window.addEventListener("scroll", () => {
    const element =
        document.querySelector(".page-nav");
    if (window.scrollY > 1000) {
        element.classList.add("visible");
    } else {
        element.classList.remove("visible");
    }
});