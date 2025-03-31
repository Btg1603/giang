let arr=[];
for (let i=0;i<10;i++){
    let value;
    do{
        value=prompt("Nhập phần tử thứ "+(i+1));
        if(isNaN(value)){
            alert("dữ liệu không hợp lệ!");
        }else{
            arr[i]=parseInt(value);
            break;
        }
    }while(true);
}
let result=arr.filter(num=>num>10);
console.log(result);
