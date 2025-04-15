
function check(e){
    e.preventDefault();

    const email=e.target.email.value.trim();
    const password=e.target.password.value.trim();
    const confirmPassword=e.target.rpass.value.trim();

    if (email === "" || password === "" || confirmPassword === "") {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp.");
        return;
    }
    // lấy danh sách đã lưu trong local nếu có
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let emailExists = users.some((user)=> {
            return user.email === email;
        });

    if(emailExists){
        alert("Email đã được sử dụng!!!");
        return;
    }
    let newUser={
        email:email,
        password:password
    };
    users.push(newUser);
    localStorage.setItem("users",JSON.stringify(users));
    alert("Đăng kí thành công");
    e.target.reset();
    }



