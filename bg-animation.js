document.addEventListener("DOMContentLoaded", function () {
    const bgContainer = document.querySelector(".container");

    function createStars() {
        for (let i = 0; i < 50; i++) { // จำนวนดาวที่ต้องการ
            let star = document.createElement("div");
            star.classList.add("star");
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 5 + 5}s`;
            bgContainer.appendChild(star);
        }
    }

    createStars(); // เรียกฟังก์ชันเพื่อสร้างดาว
});
