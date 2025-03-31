let arr=["apple", "banana", "cat", "elephant", "dog"];
if(arr.every(value=>value==="")){
    alert("mảng rỗng");
}else{
    let result=arr.filter(index=>index.length>5);
    console.log(result);
}
