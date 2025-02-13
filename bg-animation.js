document.addEventListener("DOMContentLoaded", function () {
    const bgAnimation = document.querySelector(".background-animation");

    function createMovingStars() {
        for (let i = 0; i < 50; i++) {
            let star = document.createElement("div");
            star.classList.add("star");
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 5 + 5}s`;
            bgAnimation.appendChild(star);
        }
    }

    createMovingStars();
});
