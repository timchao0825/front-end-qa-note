console.log('this js import')

// before start need to know call apply bind
// call apply bind
// =============================

// function test(argv0, argv1) {
//   console.log(this.v, argv0, argv1);
// }
// var obj = { v: 'I am v of obj' };
// // 如果我們希望這個function能吃到obj的this
// // function在物件裡頭
// obj.func = test;
// obj.func(1, 2);

// // 或是我們在第一個參數告訴function你的receiver是obj
// test.apply(obj, [1, 2]);
// test.bind(obj)(1, 2);
// test.call(obj, 1, 2);

// bind 是什麼？
// 理解 bind 作用
// =============================
// let firstname = 'tim';
// let person = {
//   firstname: 'Jeremy',
//   lastname: 'Lin',
//   getFullName: function(){
//     let fullname = this.firstname + ' ' + this.lastname;
//     return fullname;
//   }
// }
// var logName = function(location1 , location2){
//   console.log('logged:' + this.getFullName());
// }
// var logPersonName = logName.bind(person);
// logPersonName();

// 練習2
// =============================
// this.x = 9; // global x
// var module = {
//   x: 81,
//   getX: function(){return this.x},
// }
// // console.log(module.x); // 81
// var retrieveX = module.getX;
// console.log(retrieveX()); // 9
// var newRetrieveX = retrieveX.bind(module);
// console.log(newRetrieveX()); // 81

// 練習3
// =============================
// function LateBloomer() {
//   this.petalCount = Math.floor(Math.random() * 12) + 1;
// }

// // Declare bloom after a delay of 1 second
// LateBloomer.prototype.bloom = function() {
//   window.setTimeout(this.declare.bind(this), 1000);
// };

// LateBloomer.prototype.declare = function() {
//   console.log('I am a beautiful flower with ' +
//     this.petalCount + ' petals!');
// };

// var flower = new LateBloomer();
// flower.bloom();

// call 是什麼？
// 理解 call 作用
// =============================
// var person = {
//   firstname: 'Jeremy',
//   lastname: 'Lin',
//   getFullName: function(){
//     console.log(this);
//     var fullname = this.firstname + ' ' + this.lastname;
//     return fullname;
//   }
// }
// var logName = function(location1,location2){
//   console.log('logged ==> ' + this.getFullName());
//   console.log('Arguments ==> ' + location1 + location2);
// }
// logName.call(person , 'Taiwan' , 'Japan')





// call 練習 2 
// =============================
// function Product(name, price) {
//   this.name = name;
//   this.price = price;
//   console.log('aaa')
//   if (price < 0)
//     throw RangeError('Cannot create product "' + name + '" with a negative price');
//   return this;
// }
// function Food(name, price) {
//   // console.log(this);
//   console.log('bbb');
//   Product.call(this, name, price);
//   this.category = 'food';
// }
// Food.prototype = new Product();
// var animals = [
//   {species: 'Lion', name: 'King'},
//   {species: 'Whale', name: 'Fail'}
// ];
// var animals2 = [
//   {species: '111', name: '1112'},
//   {species: '222', name: '2222'}
// ]
// for (var i = 0; i < 2; i++) {
//   (function (i) { 
//     console.log('#' + i  + ' ' + this.species + ': ' + this.name); 
//   }).call(animals[i], i);
// }

// function Toy(name, price) {
  // Product.call(this, name, price);
  // this.category = 'toy';
// }
// Toy.prototype = new Product();

// var cheese = new Food('feta', 5);
// var fun = new Toy('robot', 40);
// console.log(cheese.name); // feta
// console.log(cheese.price); // 5
// console.log(cheese.category); // food
// console.log(fun.name); // robot
// console.log(fun.price); // 40

// apply 是什麼?
// =============================
// var person = {
//   firstName : 'Tim',
//   lastName : 'Lin',
//   getFullName : function(){
//     var fullname = this.firstName + ' ' + this.lastName;
//     return fullname;
//   }
// }
// const logName = function(location1 , location2){
//   console.log('logged: ' + this.getFullName());
//   console.log('Arguments: ' + location1 + location2);
// }
// var arg = ['Taiwan' , 'Taipei'];
// logName.apply(person, arg);

// this 是什麼？
// 理解 this 作用
// =============================
// let value = 1;
// let foo = {
//   value: 2,
//   bar: function () {
//     return this.value;
//   }
// }
// console.log(foo.bar()); // 
// console.log((foo.bar)()); // 
// console.log((foo.bar = foo.bar)()); // 
// console.log((false || foo.bar)()); // 
// console.log((foo.bar, foo.bar)()); // 

// var a = 10
// function test(){
//   console.log(a)
// }
  
// const obj = {
//   a: 'ojb',
//   hello: function() {
//     test()
//   },
//   hello2: function() {
//     var a = 200
//     test() 
//   }
// }

// this 練習1
// =============================
// test(); // console.log(a) > var a = 10
// console.log('==')
// obj.hello() // call(obj) test func outsite > a = 10
// console.log('==')
// obj.hello2()// call(obj) test func outside > a = 10
// console.log('==')

// call
// =============================
// function add(a,b){
//   console.log(this);
//   const total = a + b;
//   console.log(total);
// }
// const test = add.call("test123",2,3)

// this 練習2
// =============================
// const obj = {
//   value: 1,
//   hello: function() {
//     console.log(this.value)
//   }
// }
  
// obj.hello() // == obj.hello.call(obj) > this value = 1
// const hey = obj.hello;
// hey(); // hey.call(?)

// this 練習3
// =============================
// const obj = {
//   value: 1,
//   hello: function() {
//     console.log(this.value)
//   },
//   inner: {
//     value: 2,
//     hello: function() {
//       console.log(this.value)
//     }
//   }
// }
  
// const obj2 = obj.inner
// const hello = obj.inner.hello
// obj.inner.hello() // call(obj.inner) > value = 2
// obj2.hello()  // call(obj2 = obj.inner) = 2
// hello()  // call ? = undefined

// this 練習4
// =============================
// function hello() {
//   console.log(this)
// }
  
// var a = { value: 1, hello }
// var b = { value: 2, hello }
// hello() // hell.call() this == window
// a.hello() // a.hello.call(a) == a.object
// b.hello.apply(a) // b.hello.apply(a)

// this 練習5
// =============================
// var x = 10
// var obj = {
//   x: 20,
//   fn: function() {
//     var test = function() {
//       console.log(this.x)
//     }
//     test()
//   }
// }
  
// obj.fn() // obj.fn.call(obj) == 10


// 箭頭函式 this
// =============================
// const obj = {
//   x: 1,
//   hello: function(){
//     // 這邊印出來的 this 是什麼，test 的 this 就是什麼
//     // 就是我說的：
//     // 在宣告它的地方的 this 是什麼，test 的 this 就是什麼
//     console.log('hello func' ,this)     
//     const test = () => {
//       console.log('test func' , this.x)
//     }
//     test()
//   }
// }
  
// obj.hello() // 1
// const hello = obj.hello
// hello() // undefined

var name = '全域阿婆'
var auntie = {
  name: '漂亮阿姨',
  callName: function () { 
    // 注意，這裡是 function，以此為基準產生一個作用域
    console.log('1', this.name); // 漂亮阿姨
    setTimeout(() => {
      console.log('2 => ', this.name); //全域阿婆 XX 漂亮阿姨
      console.log('3 => ', this); // window XX this object
    }, 10);
    setTimeout(function(){
      console.log('2 func ', this.name); // 全域阿婆
      console.log('3 func ', this); // window
    }, 10);
  },
  callName2: () => { 
    // 注意，如果使用箭頭函式，this 依然指向 window
    console.log('4', this.name); //全域阿婆
    setTimeout(() => {
      console.log('5', this.name); //全域阿婆
      console.log('6', this); // window
    }, 10);
  }
}

auntie.callName(); // auntie.callName.call(auntie)
// auntie.callName2(); // auntie.callName2.call(auntie)


// var func = function () {
//   var func2 = function () {
//     setTimeout(() => {
//       console.log(this); 
//     }, 10);
//   };
//   // 這裡才算真正的建立一個物件
//   // 因此要在此物件下的箭頭函式才會以此作為基準
//   var func3 = {
//     func: func2,
//     var4: 4,
//   }
//   func2(); //func2.call(?) >>  window
//   func3.func(); //func3.func.call(func3) >> object func3
// }
// func(); 
