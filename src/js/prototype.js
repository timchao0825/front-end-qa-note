console.log('prototype js import')

// basic 繼承
// =============================
// function DOG(name){
//   this.name = name;
//   this.species = '犬科';
// }
// var dogA = new DOG('大毛');
// var dogB = new DOG('二毛');
// console.log(dogA.name); // 大毛
// console.log(dogB.name); // 大毛
// console.log(dogA.species); // 犬科
// console.log(dogB.species); // 犬科
// dogA.species = "貓科";
// console.log(dogA.species); // 貓科
// console.log(dogB.species); // 犬科

// prototype 原型鏈
// =============================
// function DOG(name){
//   this.name = name;
// } 
// 现在，species屬性放在prototype對象裡，是兩個實例對象共享的。只要修改了prototype對象，就會同時影響到兩個實例對象
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



// 繼承
// =============================
function Animal(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.a = 2;
}
Animal.prototype.speak = function() {
  // console.log('some sounds');
  console.log(this.name)
};
Animal.prototype.a = 3;
Animal.prototype.b = 4;
Animal.prototype.test = function(){
  console.log('animal test func')
};
// function Dog(name, gender, age) {
//   this.name = name;
//   this.gender = gender;
//   this.age = age;
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.speak = function() {
//   console.log('Bow-wow');
// };
// Dog.prototype.move = function() {
//   console.log('walk');
// };

const animal1 = new Animal('Browny', 'male', 5)
// const dog1 = new Dog('Blacky', 'male', 3)
// animal1.speak();
// dog1.speak();
console.log(animal1);
// console.log('a ==> ',Object.values(animal1));
console.log('a ==> ',animal1.a);
console.log('b ==> ',animal1.b);
animal1.test();