/* //#2 MAP 

const a = [3, 4, 5];
//item параметр в который будет попадать каждый
//элемент массива а
let b = a.map((item,index) => {
    console.log(index);
  return item * 3;
});
//исходный массив по размеру совпадает с результирующим

console.log(b);

const a1 = [];
a1[0] = 5;
a1[4] = 6;

//item параметр в который будет попадать каждый
//элемент массива а
let b1 = a1.map((item) => {
  //всё что напишу в return будет
  // выполнено и присвоено новому массиву
  return item * 3;
});
//исходный массив по размеру совпадает с результирующим

console.log(b1);
 

/* Задача 116.2

Дан массив со строками. Используя метод map в конец
 значению каждого элемента массива добавьте символ '!'.  */

/* const a = ['anna', 'saha', 'ola'];

let b = a.map((item,index) => {
    console.log(index);
  return item + '!';
});
console.log(b);   */

/* Задача 116.4

Дан следующий массив:

let arr = ['123', '456', '789'];
Используя метод map преобразуйте этот массив в следующий:

let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]; */

/* let arr = ['123', '456', '789'];

let result = arr.map(function(elem) {
return elem.split('');
});

console.log(result);
 */
/* 
Пусть дан вот такой массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
Давайте в конец каждого элемента запишем его порядковый номер в массиве:

let arr = ['a', 'b', 'c', 'd', 'e'];

let result = arr.map(function(elem, index) {
	return elem + index;
});

console.log(result); // выведет ['a0', 'b1', 'c2', 'd3', 'e4']
  */

//Задача

const temp = [0, 4, 4, 6, 8, 10, 6, 4, 3, -1, -2, -2]; //C
//F = C*1.8 + 32



let tF = temp.map((item, index, array) => {
 // console.log(index);
  return item * 1.8 + 32;
});

//исходный массив по размеру совпадает с результирующим

//console.log(tF);

let a = [33, 44, 55];
a[10] = 90;

let b = a.map((item, index, array) => {
    if (index == 1){
array[index=1] = 66;

    }
    return item
})
//console.log(b);

// упорядочить массив
const z = [
    { name: "   Ivanov",   age: '3,3' },
    { name: "  Petrov   ", age: '63' },
    { name: "  Alexeev  ", age: '36' },
    { name: "   Pitrov", age: '3,1 '},
  ];

  const zBack = z.map(item => {
      //trim обрезать пробелы
      //toLocaleLowerCase сохранить в нижнем регистре
      item.name = item.name.trim().toLocaleLowerCase();
      return item;
  });
  console.log(zBack);







