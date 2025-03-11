function findMinValue(array) {
    if (array.length === 0) {
        return "mang khong chua phan tu";
    }

    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (isNaN(array[i])) {
            return "Gia tri khong hop le";
        }
    }

    return min;
}

let numbers = [2,4,7,8,6,9];
console.log("Phan tu nho nhat trong mang la :", findMinValue(numbers));
