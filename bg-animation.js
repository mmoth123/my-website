document.addEventListener("DOMContentLoaded", function () {
    let progressBar = document.querySelector(".progress-bar-inner");
    let progress = 0;
    let loadingTime = Math.floor(Math.random() * 3000) + 3000; // 3-6 วินาที
    let interval = loadingTime / 100;

    let progressInterval = setInterval(() => {
        if (progress < 100) {
            progress++;
            progressBar.style.width = progress + "%";
        } else {
            clearInterval(progressInterval);
            window.location.href = "index.html"; // ไปหน้าเว็บหลัก
        }
    }, interval);
});
