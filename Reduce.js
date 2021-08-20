/* 
//найти максимальное число в массиве
const a = [3, 82, 7, 5, 3, 5, 99, 8, 4];
// если хочешь обработать строку, массив и получить какой-то единственный результат

let b = a.reduce((accum, item) => {
  if (item > accum) {
    accum = item;
  }
  return accum;
});
console.log('=============');
 console.log(b); 


 //переиндексировать массив
 const a = [
   {"id" : 55, "city" : "arc"},
   {"id" : 75, "city" : "rca"},
   {"id" : 175, "city" : "bra"},
  ];
  let b = a.reduce((accum, item) => {
accum.push(item.id);
    return accum;

    },[] );
  console.log('=============');
   console.log(b);


   //Задача массив перевести в строку
   const a = [3, 82, 7, 5, 3, 5, 99, 8, 4];
// accum накопитель item текущее значение
   let b = a.reduce((accum, item) => {
   accum = accum + ' ' + item;    
    return accum;
  });
  console.log('=============');
   console.log(b); 

//Задача найти сумму элементов > 0
const a = [3, 82, 7, 5, 3, 5, 99, 8, 4];
// accum накопитель item текущее значение
let b = a.reduce((accum, item) => {
  if (item > 0) {
    accum + item 
  }
  return accum;
});
console.log("=============");
console.log(b);


//Задача  Дан массив с числами. Найдите сумму первых N элементов до первого нуля.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента,
// так как дальше стоит элемент с числом 0. Показать решение.

const a = [1, 2, 3, 0, 4, 5, 6];
let z = 0;
let b = a.reduce((accum, item) => {
  if (item == 0) {
    z = accum;
  } else {
    return accum + item;
  }
});
if (z == undefined) { z = b}

console.log(z);
*/

/* Задача Дан массив с числами. Найдите сумму последних N 
 элементов до первого нуля с конца.
 Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 
 элемента, так как дальше стоит элемент с числом 0. 

 const a = [1, 2, 3, 0, 4, 5, 6];
let z = 0;
let b = a.reduce((accum, item) => {
  if (item == 0) {
    z = accum;
  } else {
    return accum + item;
  }
});
if (z == undefined) { z = b}

console.log(z);*/
/* 
 Задача   Дан массив с числами. Найдите сумму последних N
 элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента,
 так как дальше стоит элемент с числом 0. 

const a = [1, 2, 3, 0, 4, 5, 6];
let z = 0;
let b = a.reduce((accum, item) => {
  if (item == 0) {
    z = accum;
  } else {
    return accum + item;
  }
});
if (z == undefined) { z = b}

console.log(z);*/

/* Дан массив с числами. Оставьте в нем только
наибольшое число
const a = [1, -2, 3, 0, 4, -5, 6, -11];

let b = a.reduce((accum, item) => {
  if (item > accum) {
    accum = item 
  }
  return accum;
});
console.log("=============");
console.log(b);*/

//Дан массив с числами. Оставьте в нем только положительные числа.
//Затем извлеките квадратный корень и этих чисел. 

/* 
const a = [9, -8, 7, 5, -3, 5, -6, 8, -4, 0];

 */