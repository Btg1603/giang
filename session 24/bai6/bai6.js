let str = ""; 

while (true) {
    let choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Tính độ dài của chuỗi\n" +
        "4. Đếm số lần xuất hiện của một ký tự\n" +
        "5. Kiểm tra chuỗi đối xứng\n" +
        "6. Chuyển đổi chữ in hoa ký tự đầu tiên của từ\n" +
        "7. Thoát chương trình"
    ));

    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi:");
            break;

        case 2:
            alert("Chuỗi hiện tại: " + (str ? str : "Chưa có chuỗi nào được nhập."));
            break;

        case 3:
            alert("Độ dài của chuỗi: " + str.length);
            break;

        case 4:
            let charToCount = prompt("Nhập ký tự cần đếm:");
            let count = str.split(charToCount).length - 1;
            alert(`Ký tự '${charToCount}' xuất hiện ${count} lần.`);
            break;

        case 5:
            let reversedStr = str.split("").reverse().join("");
            if (str === reversedStr) {
                alert("Chuỗi là chuỗi đối xứng.");
            } else {
                alert("Chuỗi không phải là chuỗi đối xứng.");
            }
            break;

        case 6:
            let convertedStr = str
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
            alert("Chuỗi sau khi chuyển đổi: " + convertedStr);
            break;

        case 7:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
    
    }
}while(choice!==7);