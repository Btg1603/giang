let arr=[];
let max=0;
let maxPosition=0;
for (let i=0;i<10;i++){
    let value=0;
    value=+prompt("Nhập phần tử thứ "+(i+1));
    if (!(Number.isInteger(value))){
        alert("Dữ liệu không hợp lệ!");
        break;
    }else{
        arr[i]=value;
    }
}
if (arr.length>0){
    alert("Mảng rỗng");
}else{
max=Math.max(...arr);
maxPosition=arr.indexOf(max);
console.log("max: "+max+"\n"+ "position: "+maxPosition);
}
