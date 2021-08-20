/*  find запускает каждый элемент массива ф-ю,
если эта ф-я вернет true, то find останавливается
и вернет значение на котором true сработало, 
если ниразу не отработает то undefined 

const a = [21, 31, 41, 51];

//find нужен 
let b = a.find(item => {
  if(item >= 33 && item <=45) {
    return true;
  }
});
console.log(b);

//
const h = [
  {name: "ivan", age : 12},
  {name: "serg", age : 22},
  {name: "inna", age : 32},
  {name: "anton", age : 44},

];

let f = h.find(item => {
  if(item.age <= 18 ) {
    return true;
  }
});
console.log(f); 

//findIndex возращает индекс элемента который ищем,
//если условие не выполняется то: -1
const c = [22, 33, 44, 55, 66];

let w = c.findIndex((item) => {
  if (item > 45) {
    return true;
  }
});
console.log(w);
*/

const k = "hello";

let r = k.lastIndexOf('e');

console.log(r);