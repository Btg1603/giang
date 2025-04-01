let students = [];
let choice;
do {
    console.log("\n===== QUẢN LÝ DANH SÁCH SINH VIÊN =====");
    console.log("1. Nhập danh sách sinh viên.");
    console.log("2. Hiển thị danh sách sinh viên.");
    console.log("3. Tìm sinh viên theo tên.");
    console.log("4. Xóa sinh viên khỏi danh sách.");
    console.log("5. Thoát.");

    choice = parseInt(prompt("Nhập lựa chọn của bạn (1-5): "));

    switch (choice) {
        case 1:
            let count = parseInt(prompt("Nhập số lượng sinh viên: "));
            for (let i = 0; i < count; i++) {
                let name = prompt("Nhập tên sinh viên thứ " + (i + 1)).trim();
                students.push(name);
            }
            break;

        case 2:
            if (students.length === 0) {
                alert("Danh sách sinh viên trống");
            } else {
                console.log("Danh sách sinh viên: ");
                students.forEach((student, index) => {
                    console.log(`${index + 1}: ${student}`);
                });
            }
            break;

        case 3:
            let search = prompt("Nhập tên sinh viên cần tìm: ").trim();
            let found = students.filter(student => student.includes(search));

            if (found.length > 0) {
                console.log("Sinh viên tìm thấy:");
                console.log(found);
            } else {
                console.log("Không tìm thấy sinh viên");
            }
            break;

        case 4:
            let deleteName = prompt("Nhập tên sinh viên cần xóa: ").trim();
            let index = students.indexOf(deleteName);

            if (index !== -1) {
                students.splice(index, 1);
                console.log(`Đã xóa sinh viên: ${deleteName}`);
            } else {
                alert("Tên sinh viên không tồn tại");
            }
            break;

        case 5:
            alert("Thoát chương trình");
            break;

        default:
            alert("Lựa chọn không hợp lệ");
            break;
    }

} while (choice !== 5);
