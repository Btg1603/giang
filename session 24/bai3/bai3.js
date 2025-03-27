let arr = []; 
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n" +
        "4. Tính tổng và trung bình cộng của các số dương trong mảng\n" +
        "5. Đảo ngược mảng\n" +
        "6. Kiểm tra mảng có đối xứng không\n" +
        "7. Thoát chương trình\n" +
        "===========================================\n" +
        "Lựa chọn của bạn: "
    ));

    switch(choice){
        case 1:
            let n = parseInt(prompt("Nhập số lượng phần tử : "));
            arr=[];
            for(let i=0;i<n;i++){
                arr[i]=parseInt(prompt(`Nhập phần tử thứ ${i+1}`));
            }
        break;
        case 2:
            if (arr.length===0){
                alert("Không có giá trị để hiển thị");
            }else{
                alert("Mảng: "+"["+arr.join(",")+"]");
            }
        break;
        case 3:
            if (arr.length===0){
                alert("Không có giá trị để hiển thị");
            }else{
                let max=Math.max(...arr);
                let indexMax=arr.indexOf(max);
                alert ("Phần tử lớn nhất trong mảng là: "+max+" Có chỉ số: "+indexMax);
            }
        break;
        case 4:
            let count=0;
            let sum=0;
            if (arr.length===0){
                alert("Không có giá trị để hiển thị");
            }else{
                for(let i=0;i<arr.length;i++){
                    if(arr[i]>=0){
                        sum+=arr[i];
                        count++;
                    }
                }
                alert("Tổng các số dương: "+sum+" Trung bình cộng: "+sum/count);
            }
        break;
        case 5:
            if (arr.length === 0) {
                alert("Mảng rỗng, không thể đảo ngược!");
            } else {
                arr.reverse();
                alert("Mảng sau khi đảo ngược: " + arr.join(", "));
            }
        break;
        case 6:
            if (arr.length === 0) {
                alert("Mảng rỗng, không thể kiểm tra!");
            } else {
                let isSymmetric = true;
                for (let i = 0; i < Math.floor(arr.length / 2); i++) {
                    if (arr[i] !== arr[arr.length - 1 - i]) {
                        isSymmetric = false;
                        break;
                    }
                }
                if (isSymmetric) {
                    alert("Mảng là mảng đối xứng!");
                } else {
                    alert("Mảng không đối xứng!");
                }
            }
        break;
        case 7:
            alert("Thoát khỏi chương trình...");
        break;
    }
}while(choice!==7);