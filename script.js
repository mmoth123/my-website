function updateTotal() {
    let basePrice = 5000;
    let deposit = 1000;
    let extraBedPrice = 300;
    
    let extraBeds = parseInt(document.getElementById('extraBeds').value) || 0;
    let extraBedCost = extraBeds * extraBedPrice;
    let total = basePrice + deposit + extraBedCost;
    let refund = deposit; // คืนค่าประกันเต็มจำนวน
    
    document.getElementById('extraBedCost').innerText = extraBedCost;
    document.getElementById('totalPrice').innerText = total;
    document.getElementById('refund').innerText = refund;
}
