/* //Push
const a = [99, 82, 7, 5, 3, 5, 6, 8, 4];
console.log(a);

//заменить 0 элемент
a[0]=66;
console.log(a);

//добавить в конец массива
a[a.length] = 55;
console.log(a);

//Push добавляет элемент в конец массива
a.push(333, 444, 888)
console.log(a);

//POP удаляет последний элемент массива
a.pop();
console.log(a);
console.log(a.pop());
console.log(a);

const h = [3];
console.log(h);
console.log(h.pop());
console.log(h);
console.log(h.pop());
console.log(h);
 */
let car = [];
document.querySelector(".add").onclick = () => {
  let id = +document.querySelector("#goods").value;
  if (car.includes(id)) {
    car.push(id);
  }
  console.log(car);
};
document.querySelector(".pop").onclick = () => {
  let id = +document.querySelector("#goods").value;
  let goods = car.pop();
  console.log("Товар id" + goods + "был удален");
  console.log(car);
};
