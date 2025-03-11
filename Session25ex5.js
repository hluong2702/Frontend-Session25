function numberOfPositiveIntegers(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && !isNaN(array[i]) && Number.isInteger(array[i])) {
            count ++;
        }
    }
    console.log(`So nguyen duong o trong mang la: ${count} `);
}

let numberArray = [];
let n = +prompt("Moi ban nhap so luong phan tu cua mang");

for (let i = 0; i < n; i++) {
    let num = +prompt(`Nhap phan tu thu ${i + 1}:`);
    numberArray.push(num);
}

numberOfPositiveIntegers(numberArray);