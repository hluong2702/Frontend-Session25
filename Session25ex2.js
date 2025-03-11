function sum(firstNumber ,secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)){
        return "du lieu khong hop le";
    }
    return firstNumber + secondNumber;

}

console.log("Tong 2 so la: ", sum(10,'text'));