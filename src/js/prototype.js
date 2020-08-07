console.log('prototype js import')
console.log('=============================')
// basic
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
// function Animal(name, gender, age) {
//   this.name = name;
//   this.gender = gender;
//   this.age = age;
//   this.a = 2;
// }
// Animal.prototype.speak = function() {
//   console.log(this.name)
// };
// Animal.prototype.test = function(){
//   console.log('animal test func')
// };
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

// const animal1 = new Animal('Browny', 'male', 5)
// const dog1 = new Dog('Blacky', 'male', 3)
// animal1.speak();
// dog1.speak();




// new 對象機制
// =============================

// let str = "test";
// let newStr = new str; // will be error

// let num = new number(999); // will be error
// let sNum = new Num // will be error
// new 後必須跟一個對象並且此對象必須有一個名為 [[Construct]] 的內部方法（其實這種對象就是構造器），否則會拋出異常

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.log = function () {
//   console.log(this.name + ', age:' + this.age);
// }
// function newObj(Constructor, arguments) {
//   var o = new Object();
//   // 讓 o 繼承原型鍊
//   o.__proto__ = Constructor.prototype;

//   // 執行建構函式
//   Constructor.apply(o, arguments); // apply !?

//   // 回傳建立好的物件
//   return o;
// }
// var nick = newObj(Person, ['nick', 18]);
// nick.log(); // nick, age:18


// var o = {
//   a: 2,
//   m: function() {
//     return this.a + 1;
//   }
// };

// console.log(o.m()); // 3
// // 在這裡呼叫 o.m 時「this」指的是 o

// var p = Object.create(o);
// // p 是個從 o 繼承的物件

// p.a = 4; // 在 p 建立屬性「a」
// console.log(p.a); // 4
// console.log(p.m()); // 5



// class es6 語法糖
// =============================





// 原型 原始寫法
// =============================
// function Person(name) {
//   this.name = name
// }
// Person.prototype.hello = function () {
//   console.log(`Hello ${this.name}.`)
// }
// let gary = new Person('Gary')
// gary.hello() 

// Hello Gary.
//console.log(Object.getPrototypeOf(gary); // {hello: ƒ, constructor: ƒ}


// class 練習 1
// =============================
// class Person{
//   constructor (name , age , skill) {
//     this.name = name;
//     this.age = age;
//     this.skill = skill
//   }

//   hello = () => {
//     console.log(`Hello ${this.name} , ${this.age} old , nice to ${this.skill}`);
//   }
// }

// class Engineer extends Person{
//   constructor(name,age,skill){
//     super(name,age,skill); // call person; 
//     // this.skill = skill
//   }

//   test = (name) => {
//     console.log(this.name)
//   }
// }

// let tim = new Person('tim' , '20');

// let alice = new Engineer('alice' , '22' , 'JavaScript');

// tim.hello();
// alice.hello();


// class 練習 2
// =============================

// prototype
// function Person(name) {
//   // public properties
//   this.name = name;
//   // private value
//   const state = 'Taiwan';
//   // privileged methods
//   this.getFrom = () => `${this.name} from ${state}.`;
// }
// Person.prototype.hello = function(){
//   console.log('Hello ' + this.name);
// }

// const john = new Person('John');
// john.hello(); // hello john
// console.log(john); // { name: 'John', getFrom: [Function] }
// console.log(john.state); // undefined
// console.log(john.getFrom()); // John from Taiwan.


// prototype inheritance
function Person(name) {
  this.name = name;
  const state = 'Taiwan';

  this.getFrom = () => `${this.name} from ${state}.`;
}

function Employee(name, position) {
  // 將 this 送給 Person 建立 properties
  Person.call(this, name);
  this.position = position;

  // public properties
  this.getPosition = () => `${this.name}'s position is a ${this.position}.`;
}

const luck = new Employee('Luck', 'Front-end');

console.log(luck.getFrom()); // Luck from Taiwan.
console.log(luck.getPosition()); // Luck's position is the Front-end.


// es6 class
// =============================
class PersonClass{
  constructor(name){
    this.name = name;
  }

  getForm(){
    const state = `Taiwan`;
    console.log(`${this.name} from ${state}`); 
  }
}

const john = new PersonClass('john');

// console.log(JSON.stringify(john)); 
// // { name: 'John' }  public 方法不再顯露於物件裡

// console.log(JSON.stringify(john.state));
// // undefined
// john.getForm();
// // John from Taiwan.

// class inheritance
