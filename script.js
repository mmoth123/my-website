document.addEventListener("DOMContentLoaded", function () {
    updateTotal();
});

function changeImage(imageSrc) {
    document.getElementById("mainImage").src = imageSrc;
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

function viewHouse() {
    window.open("https://example.com/house-details", "_blank");
}
