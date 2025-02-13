document.addEventListener("DOMContentLoaded", function () {
    // แสดงหน้าเว็บหลังจากโหลด 3 วินาที
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000);

    // สลับโหมดมืด/สว่าง
    const toggleDarkMode = document.getElementById("toggle-dark-mode");
    toggleDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // ระบบกดใจ
    document.querySelectorAll(".like-button").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("liked");
            this.textContent = this.classList.contains("liked") ? "💖" : "❤️";
        });
    });

    // ดึงข้อมูลสภาพอากาศ
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Bangkok&units=metric&appid=YOUR_API_KEY")
        .then(response => response.json())
        .then(data => {
            document.getElementById("weather-info").innerHTML = `🌤️ อุณหภูมิ: ${data.main.temp}°C`;
        });
});
