document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.swiper-container', {
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    });

    updateTotal();
});

function changeBeds(amount) {
    let bedInput = document.getElementById("extraBeds");
    let extraBedCostLabel = document.getElementById("extraBedCost");
    let totalPriceLabel = document.getElementById("totalPrice");

    let currentBeds = parseInt(bedInput.value) || 0;
    let newBeds = currentBeds + amount;
    
    if (newBeds >= 0 && newBeds <= 5) {
        bedInput.value = newBeds;
        let extraBedCost = newBeds * 300;
        extraBedCostLabel.innerText = extraBedCost;
        updateTotal();
    }
}

function updateTotal() {
    let basePrice = 5000;
    let deposit = 1000;
    let extraBedPrice = 300;
    
    let extraBeds = parseInt(document.getElementById('extraBeds').value) || 0;
    let extraBedCost = extraBeds * extraBedPrice;
    let total = basePrice + deposit + extraBedCost;
    let refund = deposit;
    
    document.getElementById('extraBedCost').innerText = extraBedCost;
    document.getElementById('totalPrice').innerText = total;
    document.getElementById('refund').innerText = refund;
}
