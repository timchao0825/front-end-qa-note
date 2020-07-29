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
//     test() // 10
//   },
//   hello2: function() {
//     var a = 200
//     test() // 10
//   }
// }
  
// // test() // 10

