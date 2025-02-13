document.addEventListener("DOMContentLoaded", function () {
    // แสดงหน้าเว็บหลังจากโหลด 3 วินาที
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000);

    // เพิ่ม Preloader (หนูวิ่ง)
    document.getElementById("preloader").innerHTML = `
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
            <div class="wheel"></div>
            <div class="hamster">
                <div class="hamster__body">
                    <div class="hamster__head">
                        <div class="hamster__ear"></div>
                        <div class="hamster__eye"></div>
                        <div class="hamster__nose"></div>
                    </div>
                    <div class="hamster__limb hamster__limb--fr"></div>
                    <div class="hamster__limb hamster__limb--fl"></div>
                    <div class="hamster__limb hamster__limb--br"></div>
                    <div class="hamster__limb hamster__limb--bl"></div>
                    <div class="hamster__tail"></div>
                </div>
            </div>
            <div class="spoke"></div>
        </div>`;

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
