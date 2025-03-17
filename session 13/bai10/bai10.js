
var num1 = parseFloat(prompt("Nhập số thứ 1: "));


var num2 = parseFloat(prompt("Nhập số thứ 2: "));


var min = Math.min(num1, num2);
var max = Math.max(num1, num2);


var randomNum = Math.random() * (max - min) + min;


document.write("Số ngẫu nhiên trong khoảng từ " + min + " đến " + max + " là: " + randomNum.toFixed(2));
