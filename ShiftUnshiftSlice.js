/* //shift удаляет элемент в начале массива и сдвигает 
//все индексы

let a = [3, 4, 5];

let b = a.shift();

console.log(b);

console.log(a);


// unshift добавляет элемент в начало массива

let c = a.unshift(22);

console.log(a);

console.log(c);


//slice создаёт новый массив из начального массива
//начинает из указаной в аргументе позиции (3)
//включительно с этой позицией и до второй(5) не включительно
let d = [22, 33, 44, 55, 66, 77, 88, 99];
let f = d.slice(3, 5);

console.log(d);
console.log(f);

//slice можно применять к строке
let e = 'hello';

console.log(e.slice(1,4)); */