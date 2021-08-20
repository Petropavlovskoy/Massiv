//Split применяется для того чтоб разбить строку
//и превратить её в массив

let str = "hello,hi,word,test";

//через запятую можно указать 
//количество возращаемых элементов
let a = str.split(',');

console.log(a);

//JOIN преобразовувает массив в строку
let b = ['h', 'e', 'l', 'l', 'o']
let c = b.join();
console.log(c);
console.log(b);