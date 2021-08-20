const test = [22, 33, 4, 55, 66, 23, 22];
//includes возращает либо true либо false
//возратить число 22 начать искать из 4 позиции
if (test.includes(22, 4)) {
  console.log("yes");
} else {
  console.log("no");
}


const users = [
  { name: "ivanov", age: 33 },
  { name: "petrov", age: 63 },
  { name: "alexeev", age: 36 },
  { name: "pitrov", age: 31 },
];
//Применяя includes можно вычислить есть ли в даном
// массиве какое- либо значение

let newUsers = users.filter(item=> {
    return item.name.includes('o')
} );

console.log(newUsers);