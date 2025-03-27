let arr = [];
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n" +
        "4. Tính tổng các phần tử trong mảng\n" +
        "5. Tìm số lần xuất hiện của một phần tử trong mảng\n" +
        "6. Sắp xếp mảng tăng dần\n" +
        "7. Thoát chương trình\n" +
        "===========================================\n" +
        "Lựa chọn của bạn: "
    ));

    switch (choice) {
        case 1:
            let n = parseInt(prompt("Nhập số lượng phần tử muốn nhập: "));
            arr = [];
            for (let i = 0; i < n; i++) {
                arr[i] = parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `));
            }
            console.log(" Mảng đã được nhập thành công.");
            break;

        case 2:
            if (arr.length === 0) {
                console.log(" Mảng rỗng! Vui lòng nhập mảng trước.");
            } else {
                console.log(" Mảng hiện tại:", arr);
            }
            break;

        case 3:
            if (arr.length === 0) {
                console.log(" Mảng rỗng! Vui lòng nhập mảng trước.");
            } else {
                let max = Math.max(...arr);
                let min = Math.min(...arr);

                let minIndexes = [], maxIndexes = [];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === min) minIndexes.push(i);
                    if (arr[i] === max) maxIndexes.push(i);
                }

                console.log(` Số nhỏ nhất: ${min} (Vị trí: ${minIndexes.join(", ")})`);
                console.log(` Số lớn nhất: ${max} (Vị trí: ${maxIndexes.join(", ")})`);
            }
            break;

        case 4:
            if (arr.length === 0) {
                console.log(" Mảng rỗng! Vui lòng nhập mảng trước.");
            } else {
                let sum = arr.reduce((acc, val) => acc + val, 0);
                console.log(" Tổng các phần tử trong mảng là:", sum);
            }
            break;

        case 5:
            if (arr.length === 0) {
                console.log(" Mảng rỗng! Vui lòng nhập mảng trước.");
            } else {
                let x = parseInt(prompt("Nhập số cần tìm: "));
                let count = arr.filter(num => num === x).length;
                console.log(` Số ${x} xuất hiện ${count} lần trong mảng.`);
            }
            break;

        case 6:
            if (arr.length === 0) {
                console.log(" Mảng rỗng! Vui lòng nhập mảng trước.");
            } else {
                arr.sort((a, b) => a - b);
                console.log(" Mảng sau khi sắp xếp tăng dần:", arr);
            }
            break;

        case 7:
            console.log(" Thoát chương trình...");
            break;

        default:
            console.log(" Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 7.");
            break;
    }

} while (choice !== 7);
