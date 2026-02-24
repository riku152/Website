/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    
    const formatDate = (date) => {
        return date.toLocaleDateString('vi-VN', {
            day: '2-digit', month: '2-digit', year: 'numeric'
        });
    };

    // Tạo 4 mốc thời gian
    const d1 = new Date(today);
    const d2 = new Date(today); d2.setDate(today.getDate() - 4);
    const d3 = new Date(today); d3.setDate(today.getDate() - 9);
    const d4 = new Date(today); d4.setDate(today.getDate() - 15); // Tin cũ hơn

    // Tìm thẻ HTML
    const el1 = document.getElementById('date-1');
    const el2 = document.getElementById('date-2');
    const el3 = document.getElementById('date-3');
    const el4 = document.getElementById('date-4'); // Thêm cái này

    if(el1) el1.innerText = formatDate(d1);
    if(el2) el2.innerText = formatDate(d2);
    if(el3) el3.innerText = formatDate(d3);
    if(el4) el4.innerText = formatDate(d4); // Và cái này
});