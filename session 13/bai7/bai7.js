var math=parseFloat(prompt("Nhập điểm toán: "));
var physics=parseFloat(prompt("Nhập điểm lý: "));
var chemistry=parseFloat(prompt("Nhập điểm hóa: "));
var average=(math+physics+chemistry)/3;
average = average.toFixed(2);
document.write("Điểm trung bình của bạn là: "+average+"");