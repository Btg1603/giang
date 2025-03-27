let arr = []; 
let rows,cols;
let choice;

do {
    choice = parseInt(prompt(
        "===== MENU =====\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n" +
        "5. Tính trung bình cộng các phần tử của một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong mảng\n" +
        "7. Thoát chương trình\n" +
        "==================\n" +
        "Lựa chọn của bạn: "
    ));
    switch(choice){
        case 1:
            rows=parseInt(prompt("Nhập số hàng: "));
            cols=parseInt(prompt("Nhập số cột: "));
            matrix=[];
            for (let i=0;i<rows;i++){
                matrix[i]=[];
                for (let j=0;j<cols;j++){
                    matrix[i][j]=parseInt(prompt(`Nhập phần tử tại vị trí [${i}][${j}`));
                }
            }
        break;
        case 2:
            let result = "";
            for (let i = 0; i < rows; i++) {
                result += matrix[i].join(" ") + "\n";
            }
            alert("Mảng 2 chiều:\n" + result);
        break;
        case 3:
        let sum=0;
        for (let i=0;i<rows;i++){
            for (let j=0;j<cols;j++){
                sum+=matrix[i][j];
            }
        }
        alert ("Tổng các phần tử trong mảng là: "+sum);
        break;
        case 4:
        let max=matrix[0][0];
        let maxRow = 0,maxCol=0;
        for (let i=0;i<rows;i++){
            for (let i=0;i<cols;i++){
                if (matrix[i][j]>max){
                    max=matrix[i][j];
                    maxRow=i;
                    maxCol=j;
                }
            }
        }
        alert(`Phần tử lớn nhất là ${max} tại vị trí [${maxRow}][${maxCol}]`);
        break;
        case 5:
            let row = parseInt(prompt("Nhập số hàng cần tính trung bình cộng: "));
            if (row >= 0 && row < rows) {
                let sumRow = 0;
                for (let j = 0; j < cols; j++) {
                    sumRow += matrix[row][j];
                }
                let avg = sumRow / cols;
                alert(`Trung bình cộng của hàng ${row}: ${avg}`);
            } else {
                alert("Số hàng không hợp lệ!");
            }
            break;
        case 6:
            for (let i = 0; i < rows; i++) {
                let start = 0, end = cols - 1;
                while (start < end) {
                    let temp = matrix[i][start];
                    matrix[i][start] = matrix[i][end];
                    matrix[i][end] = temp;
                    start++;
                    end--;
                }
            }
            alert("Đã đảo ngược các hàng trong mảng!");
            break;
        case 7:
            alert("Thoát");
            break;
    }
}while(choice!==7);