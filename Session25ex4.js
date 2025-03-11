function isPrime(number) {
    let count = 0;
    if (number < 0 || !Number.isInteger(number)) {
        console.log("Nhap so nguyen duong co ma");
        return;
    }

    if (number < 2) {
        console.log(`Nhap so lon hon 2 b oi`);
        return;
    }

    for (let i = 2; i <= number; i++) {
        if(number % i === 0){
            count ++;
        }   
    }
    if (count ===0) {
        console.log(`${number} la so nguyen to`);
    } else {
        console.log(`${number} khong phai la so nguyen to`);
    }
}

let input = +prompt(`Moi ban nhap vao mot so `);
isPrime(input);