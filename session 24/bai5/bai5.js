let arr = []; 
let rows,cols;
let choice;

do {
    choice = parseInt(prompt(
        "===== MENU =====\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tính tổng đường chéo chính\n" +
        "5. Tính tổng đường chéo phụ\n" +
        "6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)\n" +
        "7. Thoát chương trình\n" +
        "==================\n" +
        "Lựa chọn của bạn: "
    ));
    switch(choice){
        case 1:
            rows=parseInt(prompt("Nhập số hàng"));
            cols=parseInt(prompt("Nhập số cột"));
            matrix=[];
            for(let i=0;i<rows;i++){
                matrix[i]=[];
                for (let j=0;j<cols;j++){
                    matrix[i][j]=parseInt(prompt(`Nhập phần tử tại vị trí [${i}][${j}]: `));
                }
            }
        break;
        case 2:
            let result ="";
            for (let i=0;i<rows;i++){
                result+=matrix[i].join(" ")+"\n";
            }
            alert("Mảng hai chiều: \n"+result);
        break;
        case 3:
            sum=0;
            for(let i=0;i<rows;i++){
                for (let j=0;j<cols;j++){
                    sum+=matrix[i][j];
                }
            }
            alert ("Tổng các phần tử : "+sum);
        break;
        case 4:
            if(rows>=2&&cols>=2&&rows==cols){
                let sum=0;
                for (let i = 0; i < rows; i++) {
                    sum += matrix[i][i];
                }
                alert("Tổng đường chéo chính: "+sum);
            }else{
                alert("Mảng không phải ma trận vuông!\n");
                let n = parseInt(prompt("Nhập số cột và hàng của ma trận vuông: "));
                let newMatrix = [];
                for(let i=0;i<n;i++){
                    newMatrix[i]=[];
                    for (let j=0;j<n;j++){
                        newMatrix[i][j]=parseInt(prompt(`Nhập phần tử tại vị trí [${i}][${j}] : `));
                    }
                }
                let sum=0;
                for(let i=0;i<n;i++){
                    sum+=newMatrix[i][i];
                }
                alert("Tổng đường chéo chính: "+sum);
            }
        break;
        case 5:
            if(rows>=2&&cols>=2&&rows==cols){
                let sum=0;
                for (let i = 0; i < rows; i++) {
                    sum += matrix[i][n-i-1];
                }
                alert("Tổng đường chéo phụ: "+sum);
            }else{
                alert("Mảng không phải ma trận vuông!\n");
                let n = parseInt(prompt("Nhập số cột và hàng của ma trận vuông: "));
                let newMatrix = [];
                for(let i=0;i<n;i++){
                    newMatrix[i]=[];
                    for (let j=0;j<n;j++){
                        newMatrix[i][j]=parseInt(prompt(`Nhập phần tử tại vị trí [${i}][${j}] : `));
                    }
                }
                let sum=0;
                for(let i=0;i<n;i++){
                    sum+=newMatrix[i][n-i-1];
                }
                alert("Tổng đường chéo chính: "+sum);
            }
        break;
        case 6:
            let yourchoice=parseInt(prompt("Nhập số hàng hoặc cột bạn muốn tính\n"+"1.hàng\n"+"2.cột\n"));
            switch(yourchoice){
                case 1:
                    let sumhang=0;
                let newrows=parseInt(prompt("Nhập số hàng muốn tính: "));
                for (let i =0 ; i<cols;i++){
                    sumhang+=matrix[newrows][i];
                }
                alert("trung bình cộng các số là: "+sumhang/cols);
                break;

                case 2:
                    let sumcot=0;
                    let newcols=parseInt(prompt("Nhập số cột muốn tính: "));
                for (let i =0 ; i<rows;i++){
                    sumcot+=matrix[i][newcols];
                }
                alert("trung bình cộng các số là: "+sumcot/rows);
                break;
            }
        break;
        case 7:
            alert("Thoát chương trình...");
        break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
}while(choice!==7);