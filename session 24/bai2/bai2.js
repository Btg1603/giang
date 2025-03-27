let arr = []; 
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm các phần tử chẵn lẻ\n" +
        "4. Tính trung bình cộng của mảng\n" +
        "5. Xóa phần tử tại vị trí chỉ định\n" +
        "6. Tìm phần tử lớn thứ hai trong mảng\n" +
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
            let arrchan=[];
            let arrle=[];
            if (arr.length===0){
                alert("Không có giá trị để hiển thị");
            }else{
                for(let i=0;i<arr.length;i++){
                    if (arr[i]%2==0){
                        arrchan.push(arr[i]);
                    }else{
                        arrle.push(arr[i]);
                    }
                }
            }
            let message = "";

        if (arrchan.length > 0) {
            message += "Các phần tử chẵn: " + arrchan.join(", ") + "\n";
        } else {
            message += "Không có số chẵn nào.\n";
        }

        if (arrle.length > 0) {
            message += "Các phần tử lẻ: " + arrle.join(", ");
        } else {
            message += "Không có số lẻ nào.";
        }

        alert(message);
        break;
        case 4:
            let average=0;
            let sum=0;
            if (arr.length===0){
                alert("Không có giá trị để hiển thị");
            }else{
                for(let i=0;i<arr.length;i++){
                    sum+=arr[i];
                }
                average=sum/arr.length;
                alert("Trung bình cộng của mảng : "+average);
            }
        break;
        case 5:
            if (arr.length===0){
                alert("Không có giá trị để hiển thị");
            }else{
                let index=parseInt(prompt("Nhập vị trí cần xóa: "));
                if(index<arr.length||index>arr.length){
                    arr.splice(index,1);
                }else{
                    alert ("Giá trị không hợp lệ");
                }
            }
            alert ("mảng sau khi xóa: "+arr.join(","));
        break;
        case 6:
            if (arr.length < 2) {
                alert("Không thể tìm phần tử lớn thứ hai vì mảng có ít hơn 2 phần tử!");
            } else {
                let max1 = -Infinity, max2 = -Infinity;
        
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > max1) {
                        max2 = max1; 
                        max1 = arr[i];
                    } else if (arr[i] > max2 && arr[i] < max1) {
                        max2 = arr[i];
                    }
                }
        
                if (max2 === -Infinity) {
                    alert("Không có phần tử lớn thứ hai vì tất cả phần tử trong mảng đều giống nhau!");
                } else {
                    alert(`Phần tử lớn thứ hai trong mảng là: ${max2}`);
                }
            }
        break;
        case 7:
            alert("Thoát chương trình...");
        break;
    }
}while(choice!==7);