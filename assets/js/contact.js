let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    
    let index = email.indexOf('@');
    if (index < 1 || email.indexOf('.', index) < 1) {
        alert("Email không hợp lệ");
        return;
    }

    if (phone.length < 10) {
        alert("Số điện thoại không hợp lệ");
        return;
    }

    alert("Đăng ký thành công!");
});