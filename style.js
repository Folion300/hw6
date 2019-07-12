//1
function printTimeout(str, n) {
    function ght() {
        console.log(str);
    }
    setTimeout(ght, n*1000);
}
printTimeout('hello', 10);


//2
function sumAll(n) {
    if (n == 1) return 1;
    return n + sumAll(n - 1);
}
console.log(sumAll(2)); // 3
console.log(sumAll(4)); // 10


//4
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));


//6
function filterNumbers(arr, maxNumber) {
    let array = [];
    arr.filter(number => {
        if (number < maxNumber) {
            array.push(number);
        }
    });
    console.log(array);
}
filterNumbers([1, 4, 8, 1, 20], 5) // [1, 4, 1]


//8
function average(arr) {
    let number = 0;
    for (var i = 0; i < arr.length; i++) {
        number += arr[i];
    }
    return parseFloat(number / arr.length).toPrecision(3);
}
average([1, 4, 2]);
