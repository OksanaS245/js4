//task 1
function sum (x, y) {
    return x + y;
}
let result = sum (10, 6);
console.log (result);

//task 2
function min (a, b) {
    if (a > b) {return a;}
    else {return b;} 
}
console.log (min(5, 4));

//task 3
function pow (x, n) {
    console.log (x ** n);
}
pow (2, 3);

//task 4
function numb (n) {
    if (n % 2 == 0) {return `Число ${n} - четное`;}
    else {return (`Число ${n} - не четное`);}
}
console.log(numb(3));

//task 5
function componentToHex (colorNumber) {
    let hex = colorNumber.toString (16); //задаем функцию для параметра а
    return hex.length == 1 ? '0' + hex : hex ;
}

function rgbToHex (r = 0, g = 0, b = 0) { //задать значения по умолчанию
    
    const hex1 = componentToHex (r); //задаем переменную и вызываем функцию componentToHex, где r - аргумент для componentToHex, но параметр для rgbToHex
    const hex2 = componentToHex (g);
    const hex3 = componentToHex (b);

    return `#${hex1}${hex2}${hex3}`; //возвращаем значение заданных прежде переменных
}

console.log (rgbToHex (20, 33, 5)); //выводим значение вызывом ф-ции rgbToHex


//task 6
function squareNumber (num) {
    let b = num ** 2;
    return b;
    }
  
function secondFunc (a) {
    try {
    if (a >= 18 && a <= 50) {
       return squareNumber (a);
    } else {throw new Error ('incorrect number');}
}
    catch (error) {return error.message;}
}
console.log (secondFunc (20));


