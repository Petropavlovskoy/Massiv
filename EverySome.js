
/* //every позволяет проверить каждый
//  элемент на какие-то условия в результате true false
const a = [4, 5, 6, 7, 8, 11, 5];

let b = a.every((item) => {
  if (item > 0 && item < 20) {
    return true;
  }
});

console.log(b);

//если массив пуст будет true

const c = [
  {name: "ivan", age : 12},
  {name: "serg", age : 22},
  {name: "inna", age : 32},
  {name: "anton", age : 44},

];

let b = c.every((item) => {
  if (item.age >= 16) {
    return true;
  }
});

console.log(b); */

//Some проверяет есть ли хоть один 
//элемент массива который отвечает 
//приведенным условиям
/* 
const h = [
  {name: "ivan", age : 12},
  {name: "serg", age : 22},
  {name: "inna", age : 32},
  {name: "anton", age : 44},

];
//если массив пуст будет false

let j = h.some((item) => {
  //есть ли хоть один пользователь меньше 16

  if (item.age < 16) {
    return true;
  }
});

console.log(j); */