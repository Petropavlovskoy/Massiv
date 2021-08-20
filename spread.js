const a = [3, 4, 5];
const b = ["c", "d", "e"];

//merge
const c = [...a, ...b];
console.log(c);

//clone
const d = [...b];
console.log(d);

// string -> array
const e = [..."hello"];
console.log(e);

// set -> array трансформировать в массив
const f = [...new Set([1, 1, 2, 3, 1, 2, 3, 4, 5, 6])];
console.log(f);

function test() {
  console.log([...arguments]);
}

test(3, 4, 5, 6, 7);

let p = document.querySelectorAll("p");
console.log(p);
console.log([...p]);