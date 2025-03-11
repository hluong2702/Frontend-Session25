function findEvenNumber(array) {
    if (array === 0) {
        console.log(`Mang rong`);
        return;
    }

    let evenNumber =[];
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            console.log(`du lieu khong hop le`);
            return;
        }
  
        if (array[i] % 2 ===0) {
            evenNumber.push(array[i]);
        }

        if (evenNumber.length === 0) {
            console.log("Mang k chua so chan");
        } else {
            console.log("Mang chua so chan la: ", evenNumber);
        }
    }
}

let number = [11,4,65,7];
findEvenNumber(number);