function validEmails(emails) {
    if (!Array.isArray(emails)) {
        return "Dữ liệu không hợp lệ";
    }

    valid = emails.filter(email =>typeof email ==="string" && email.includes("@") && !email.includes(" ")
    );
    if(valid.length > 0){
        return valid;
    }else{
        alert("Mảng không có phần tử nào")
    }
}

console.log(validEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"])); 
