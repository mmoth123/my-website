document.getElementById('extraBeds').addEventListener('input', updateTotal);

function updateTotal() {
    let basePrice = 5000;
    let deposit = 1000;
    let extraBedPrice = 300;
    
    let extraBeds = parseInt(document.getElementById('extraBeds').value);
    let total = basePrice + deposit + (extraBeds * extraBedPrice);
    let refund = deposit; // คืนค่าประกันเต็มจำนวน
    
    document.getElementById('totalPrice').innerText = total;
    document.getElementById('refund').innerText = refund;
}

function confirmBooking() {
    alert("✅ การจองสำเร็จ! โปรดตรวจสอบรายละเอียดการชำระเงิน");
}

