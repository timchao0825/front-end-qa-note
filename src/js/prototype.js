console.log('prototype js import')

// basic 繼承
// =============================
// function DOG(name){
//   this.name = name;
//   this.species = '犬科';
// }
// var dogA = new DOG('大毛');
// var dogB = new DOG('二毛');
// // console.log(dogA.name); // 大毛
// // console.log(dogB.name); // 大毛
// // console.log(dogA.species); // 犬科
// // console.log(dogB.species); // 犬科
// dogA.species = "貓科";
// console.log(dogA.species); // 貓科
// console.log(dogB.species); // 犬科

// prototype 原型鏈
// =============================
// function DOG(name){
//   this.name = name;
// } 
// 现在，species属性放在prototype对象里，是两个实例对象共享的。只要修改了prototype对象，就会同时影响到两个实例对象
// DOG.prototype = { species : '犬科' };
// var dogA = new DOG('大毛');
// var dogB = new DOG('二毛');
// console.log(dogA.species); // 犬科
// console.log(dogB.species); // 犬科

// function Person(name, gender){
//   this.name = name;
//   this.gender = gender;
// }
// // console.log(Person.prototype); // {} 空對象
// Person.prototype = {
//   country: 'China'
// };
// var a = new Person("Jason", 'male');
// var b = new Person("Amy", 'female');
// // console.log(a.name); // Jason
// // console.log(b.name); // Amy
// console.log(a.country); // China
// console.log(b.country); // China

// prototype 原型鏈 練習2
// =============================
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.log = function () {
//     console.log(this.name + ', age:' + this.age);
//   }
// }
// var nick = new Person('nick', 18);
// var peter = new Person('peter', 20);
// nick.log(); // nick, age:18
// peter.log(); // peter, age:20
// console.log(nick.log === peter.log) // false
// 問題 呼叫兩次 不同實例內的log 佔兩次資源
// =============================

// prototype
// =============================
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
  
// Person.prototype.log = function () {
//   console.log(this.name + ', age:' + this.age);
// }
  
// var nick = new Person('nick', 18);
// var peter = new Person('peter', 20);
// nick.log(); // nick, age:18
// peter.log(); // peter, age:20
// console.log(nick.log === peter.log) // true

// 原理 , proto chain 原型鍊 __proto__
// =============================

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
  
// Person.prototype.log = function () {
//   console.log(this.name + ', age:' + this.age);
// }
  
// Person.prototype.log2 = function () {
//   console.log(this.name + ', age:' + this.age);
// }
// var nick = new Person('nick', 18);
  
// console.log(nick.__proto__ === Person.prototype) // true

// prototype 原型鏈 練習3
// =============================
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
  
// Person.prototype.log = function () {
//   console.log(this.name + ', age:' + this.age);
// }
  
// var nick = new Person('nick', 18);
  
// // 這個剛講過了，nick.__proto__ 會指向 Person.prototype
// console.log(nick.__proto__ === Person.prototype) // true
  
// // 那 Person.prototype.__proto__ 會指向誰呢？會指向 Object.prototype
// console.log(Person.prototype.__proto__ === Object.prototype) // true
  
// // 那 Object.prototype.__proto__ 又會指向誰呢？會指向 null，這就是原型鍊的頂端了
// console.log(Object.prototype.__proto__) // null


// hasOwnProperty
// =============================
// 如果想知道一個屬性是存在 instance 身上，還是存在於它屬於的原型鍊當中，可以用hasOwnProperty這個方法：
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
  
// Person.prototype.log = function () {
//   console.log(this.name + ', age:' + this.age);
// }
  
// var nick = new Person('nick', 18);
// console.log(nick.hasOwnProperty('log')); // false
// console.log(nick.__proto__.hasOwnProperty('log')); // true


// instanceof
// =============================
// 顧名思義，A instanceof B 就是拿來判斷 A 是不是 B 的 instance
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
  
// Person.prototype.log = function () {
//   console.log(this.name + ', age:' + this.age);
// }
  
// var nick = new Person('nick', 18);
  
// console.log(nick instanceof Person); // true
// console.log(nick instanceof Object); // true
// console.log(nick instanceof Array); // false