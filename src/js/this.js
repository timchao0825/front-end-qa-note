console.log('this js import')

// before start need to know call apply bind
// call apply bind
// =============================


function test(argv0, argv1) {
  console.log(this.v, argv0, argv1);
}
var obj = { v: 'I am v of obj' };
// 如果我們希望這個function能吃到obj的this
// function在物件裡頭
obj.func = test;
obj.func(1, 2);

// 或是我們在第一個參數告訴function你的receiver是obj
test.apply(obj, [1, 2]);
test.bind(obj)(1, 2);
test.call(obj, 1, 2);



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
// console.log(foo.bar()); //
// console.log((foo.bar)()); //
// console.log((foo.bar = foo.bar)()); //
// console.log((foo.bar, foo.bar)()); //


