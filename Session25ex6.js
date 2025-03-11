function checkPalindrome(string) {
    let reversedString = [...string].reverse().join(""); 
    let count = 0; 

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== reversedString[i]) {
            count++;
        }
    }

    if (count === 0) {
        console.log("Chuoi doi xung");
    } else {
        console.log("Chuoi khong doi xung");
    }
}

let inputString = prompt("Moi ban nhap vao:");
checkPalindrome(inputString);
