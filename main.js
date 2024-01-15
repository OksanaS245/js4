//task 1
function sum (x, y) {
    return x + y
}
let result = sum (10, 6);
console.log (result);

//task 2
function min (a, b) {
    if (a > b) {console.log (a)} 
    else {console.log (b)} 
};
min (5, 4)

//task 3
function pow (x, n) {
    console.log (x ** n);
}
pow (2, 3);

//task 4
function numb (n) {
    if (n % 2 == 0) {console.log (`Число ${n} - четное`)}
    else {console.log (`Число ${n} - не четное`)}
};

numb (3);

//task 5
function componentToHex (colorNumber) {
    let hex = colorNumber.toString (16); //задаем функцию для параметра а
    return hex.length == 1 ? '0' + hex : hex ;
}

function rgbToHex (r, g, b) {
    r = typeof r === 'undefined' ? 0 : r;
    g = typeof g === 'undefined' ? 0 : g;
    b = typeof b === 'undefined' ? 0 : b;

    const hex1 = componentToHex(r); //задаем переменную и вызываем функцию componentToHex, где r - аргумент для componentToHex, но параметр для rgbToHex
    const hex2 = componentToHex(g);
    const hex3 = componentToHex(b);

    return `#${hex1}${hex2}${hex3}`; //возвращаем значение заданных прежде переменных
}

console.log (rgbToHex (20, 33, 5)); //выводим значение вызывом ф-ции rgbToHex


//task 6
function squareNumber (num) {
    let b = num ** 2;
    return b;
    }
    let firsFunc = squareNumber (25);
console.log (firsFunc);

function secondFunc (a) {
    if (a >= 18 && a <= 50) {
        const c = squareNumber (a);
        return c;
    } else {throw new Error ('incorrect number')}
};
let d = secondFunc (20);
console.log (d);


