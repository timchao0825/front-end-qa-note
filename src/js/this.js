console.log('this js import')
// this 是什麼？
// 理解 this 作用
// =============================
let value = 1;
let foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}
// console.log(foo.bar()); // 2
console.log((foo.bar)()); // 1 error,  console.log(2) ?
console.log((foo.bar = foo.bar)());
console.log((foo.bar, foo.bar)());

// before start