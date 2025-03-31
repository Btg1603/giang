function Prime(num){
    if (num<2) return false;
    for (let i=2;i*i<=num;i++){
        if (num%i===0)
            return false;
    }
    return true;
}

function arrPrime(arr){
    if(!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ";
    }else{
        const prime=arr.filter(num=>Number.isInteger(num)&&Prime(num));
        if (prime.length>0){
            return prime;
        }else{
            return "Mảng không có phần tử nào";
        }
    }
}
console.log(arrPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
