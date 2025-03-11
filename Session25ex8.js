function isStrongPassword(string) {
    if (typeof string !== "string") {
        console.log(" Mật khẩu phải là chuỗi ký tự!");
        return;
    }

    if (string.length < 8) { 
        console.log(" Mật khẩu phải có ít nhất 8 ký tự.");
        return;
    }

    let hasUpperCase = 0;
    let hasLowerCase = 0;
    let hasNumber = 0;
    let hasSpecialChar = 0;
    let specialChars = "!@#$%^&*()_+[]{}|;:'\",.<>?/";

    for (const char of string) {
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase++;
        } else if (char >= 'a' && char <= 'z') {
            hasLowerCase++;
        } else if (char >= '0' && char <= '9') {
            hasNumber++;
        } else if (specialChars.includes(char)) {
            hasSpecialChar++;
        }
    }

    if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
        console.log(" Mật khẩu mạnh!");
    } else {
        console.log(" Mật khẩu chưa đủ mạnh, cần có chữ hoa, chữ thường, số và ký tự đặc biệt.");
    }
}

isStrongPassword("Abc123!@");  
isStrongPassword("weakpass"); 
