document.addEventListener("DOMContentLoaded", function () {
    // เรียกใช้งาน Swiper
    new Swiper('.swiper-container', {
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    });

    // ตั้งค่าเริ่มต้น
    document.getElementById('extraBeds').value = 0;
    updateTotal();
});

function changeBeds(amount) {
    let bedInput = document.getElementById("extraBeds");
    let currentBeds = parseInt(bedInput.value) || 0;
    let newBeds = currentBeds + amount;

    if (newBeds >= 0 && newBeds <= 5) {
        bedInput.value = newBeds;
        updateTotal();
    }
}

function updateTotal() {
    let basePrice = 5000;
    let deposit = 1000;
    let extraBedPrice = 300;
    
    let extraBeds = parseInt(document.getElementById('extraBeds').value) || 0;
    let extraBedCost = extraBeds * extraBedPrice;
    let total = basePrice + extraBedCost;
    let refund = deposit;
    
    document.getElementById('extraBedCost').innerText = extraBedCost;
    document.getElementById('totalPrice').innerText = total + deposit;
    document.getElementById('refund').innerText = refund;
}

function bookNow() {
    alert("ติดต่อจองที่พักได้ที่ LINE: @yourline หรือโทร 080-xxx-xxxx");
}
