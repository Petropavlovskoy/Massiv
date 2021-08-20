/*  //#3 Filter

//вернуть элементы больше 7
const a = [9, 8, 7, 5, 3, 5, 6, 8, 4];

//в нутрь ф-и item передаэм текущий элемент массива

let c = a.filter( item => {
    //
    if (item >7 ) {

        //операция в return будет приведина к true или false
        return item;
    }
});
console.log(c); 

//вернуть чётные элементы
 const a = [9, 8, 7, 5, 3, 5, 6, 8, 4, 0];

//в нутрь ф-и item передаэм текущий элемент массива

let c = a.filter( item => {
    //
    if (item %2 === 0 ) {

        //операция в return будет приведина к true или false
        return true;
    }
});
console.log(c); */

/*Задача 118.1

 Дан массив с числами. Оставьте 
в нем только положительные числа.

const a = [9, -8, 7, 5, -3, 5, -6, 8, -4, 0];

let c = a.filter( item => {
    //
    if (item > 0 ) {

        //операция в return будет приведина к true или false
        return item;
    }
});
console.log(c); 
 

Задача 118.2

Дан массив с числами. Оставьте в нем 
только отрицательные числа.

const a = [9, -8, 7, 5, -3, 5, -6, 8, -4, 0];

let c = a.filter( item => {
    //
    if (item < 0 ) {

        //операция в return будет приведина к true или false
        return item;
    }
});
console.log(c);  

Задача 118.3

Дан массив с числами. Оставьте в нем только числа, 
которые больше нуля, но меньше 10.

const a = [90, -8, 7, 51, -3, 53, -6, 8, -4, 0];

let c = a.filter( item => {
    //
    if (item > 0 && item < 10) {

        //операция в return будет приведина к true или false
        return item;
    }
});
console.log(c);  

Пусть у нас опять есть наш массив:

let arr = [1, 2, 3, 4, 5];
Давайте подсчитаем количество четных элементов в нем:

let arr = [1, 2, 3, 4, 5];

let filtered = arr.filter(elem => elem % 2 == 0);
console.log( filtered.length ); // выведет 2
Перепишем еще проще:

let arr = [1, 2, 3, 4, 5];
console.log( arr.filter(elem => elem % 2 == 0).length ); // выведет 2

Задача 118.4

Задача 118.7

Дан массив с числами. Посчитайте количество 
отрицательных чисел в этом массиве.




const a = [9, -8, 7, 5, -3, 5, -6, 8, -4, 0];

let c = a.filter( item => {
    //
    if (item < 0 ) {

        //операция в return будет приведина к true или false
        return item;
    }
});
console.log(c); 
alert (c.length)
*/

const a = [9, -8, 7, 5, -3, 5, -6, 8, -4, 0];

b = a.filter(item => {
    if (item > 5)
    return true;
})

console.log(b);