document.addEventListener("DOMContentLoaded", function () {
    // เรียกใช้งาน Swiper
    new Swiper('.swiper-container', {
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    });

    // ตั้งค่าเริ่มต้น
    document.querySelectorAll('.extraBeds').forEach(input => {
        input.value = 0;
    });
    updateTotal();
});

function changeBeds(amount, element) {
    let bedInput = element.closest('.pricing').querySelector(".extraBeds");
    let currentBeds = parseInt(bedInput.value) || 0;
    let newBeds = currentBeds + amount;

    if (newBeds >= 0 && newBeds <= 5) {
        bedInput.value = newBeds;
        updateTotal();
    }
}

function updateTotal() {
    document.querySelectorAll('.place-card').forEach(card => {
        let basePrice = 5000;
        let deposit = 1000;
        let extraBedPrice = 300;
        
        let extraBeds = parseInt(card.querySelector('.extraBeds').value) || 0;
        let extraBedCost = extraBeds * extraBedPrice;
        let total = basePrice + extraBedCost;
        let refund = deposit;
        
        card.querySelector('.extraBedCost').innerText = extraBedCost;
        card.querySelector('.totalPrice').innerText = total + deposit;
        card.querySelector('.refund').innerText = refund;
    });
}

function bookNow() {
    alert("ติดต่อจองที่พักได้ที่ LINE: @yourline หรือโทร 080-xxx-xxxx");
}

// ป้องกัน Swiper ซ้อนทับ
setTimeout(() => {
    document.querySelectorAll('.swiper-container').forEach(container => {
        container.style.overflow = 'hidden';
    });
}, 100);
