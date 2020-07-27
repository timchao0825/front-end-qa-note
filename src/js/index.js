// es5 area
$(document).ready(function(){
// con===============================================================================================
console.log('index js. import');

// let arrayA = ['a1','a2','a3'];
let arrayA = [
  {
    id:1,
    name: 'a1'
  },
  {
    id:2,
    name: 'a2'
  }
]
// let arrayB = ['b1','b2','b3'];
let arrayB = {
  id:3,
  name:'a3'
}
arrayA.push(arrayB);
// arrayA = [...arrayA,...arrayB];
console.log(arrayA);

// setTimeout(function(){ console.log('index es5 js.'); }, 3000);
// $('#first').on('click',function(){
//   console.log('first click');
// })
// $('#second').on('click',function(){
//   console.log('second click');
// })
// $('#third').on('click',function(){
//   console.log('third click');
// })

// function test(i){
//   setTimeout( function () {
//     console.log(i);
//   }, 0);
// }
// for(var i = 0; i < 5; i++) {
//   test(i)
// }

// 立即執行function的寫法 (function(){})();
// (function (i){
  // const x = 2;
  // console.log(`x => ${x}`)
  // console.log(typeof(i))
  // console.log(i);
// }('漢堡'))
// (function(food){
// 	console.log('大俠愛吃' + food)
// }('漢堡包'));

// "abc" + 100; // abc 100
// 100 + NaN; // nan

// 100 - true; // 99
// 100 - undefined   // NaN
// 100 - null        // 100
// 100 - { } // NaN

// 100 * "10"      // 1000
// 100 * abc       // NaN

// 100 * true      // 100
// 100 * false     // 0

// 100 * {}        // NaN
// console.log(b);

// hoisting
// console.log(a);
// var a = 12;
// var foo = "bar"
// var a = 1
// function bar() {
//     foo = "inside bar"
//     var a = 2
//     c = 3
//     console.log(c)
//     console.log(d)
// }
// bar()


// closure
// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }
// for (let i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }


// var f = 
// (function fun() {
//     var x = 10;
    
//     function ff(y) {        
//         return x + y;
//     }
    
//     x--;
//     return ff;
// })();

// console.log( f(100) ); // 109
// console.log( f(200) ); // 209

// var f = 
// (function fun() {
//     var x = 10;
    
//     function ff(y) {
//         x--;
//         return x + y;
//     }
        
//     return ff;
// })();

// console.log( f(100) ); // 109
// console.log( f(200) ); // 208

// var id = 1;

// function customer() {
//     console.log(this.id);
// }

// customer();                //-- console output1
// var c = new customer();    //-- console output2

// var x = 3;
// var foo = {
//     x: 2,
//     baz: {
//         x: 1,
//         bar: function() {
//             return this.x;
//         }
//     }
// }

// var go = foo.baz.bar;

// // console.log(go());
// console.log(foo.baz.bar());

// 錢的計數程式
// var count = 0

// function countMoney () {
//   count += 1
//   console.log(count + ' Money');
// }

// countMoney()    // 1 
// countMoney()    // 2 
// countMoney()    // 3 
// count會受到全域變數的影響

// var count = 10;
// function creatWallet () {
//     var count = 0
//     function countMoney () {
//       count += 1
//       console.log(count + ' Money')
//     }
//     return countMoney
// }
  
// const countMoney = creatWallet()
// countMoney()    // "1 Money"
// countMoney()    // "2 Money"
// countMoney()    // "3 Money"
// console.log(count + ' >> Count value'); // 10 >> Count value
// 封裝變數count ，閉包內count不受外部count影響


// call back QA
// var closeBox = function(callback){
//   $('.dialog__box').removeClass('dialog__box--show');
// }
// var firstAlert = function(callback){
//   window.setTimeout(function(){
//     $('.dialog__box.first').addClass('dialog__box--show');
//   }, 1000);
// };

// var secondAlert = function(callback){
//   window.setTimeout(function(){
//     $('.dialog__box.second').addClass('dialog__box--show');
//   }, 5000);
// }

// firstAlert(
//   closeBox(
//     secondAlert()
//   )
// );

// Promise QA
// const delay = function(time){
//   return new Promise(function(resolve,reject){
//    setTimeout(resolve,time);
//   });
// };
// let closeBox = function(){
//   $('.dialog__box').removeClass('dialog__box--show');
// };
// let firstAlert = function(){
//   $('.dialog__box.first').addClass('dialog__box--show');
// };
// let secondAlert = function(){
//   $('.dialog__box.second').addClass('dialog__box--show');
// };
// delay().then(function(){
//   return delay(1000);
// }).then(function(){
//   firstAlert();
//   return delay(5000); 
// }).then(function(){
//   closeBox();
//   secondAlert();
// });

// const showDialogBox = async function(){
//   await delay(1000);
//   firstAlert();
//   await delay(5000);
//   closeBox();
//   secondAlert();
// }

// showDialogBox();


// ===============================================================================================
});/* end document */



// // es6 test area
// setTimeout(() => { console.log("es6 to es2015 FTW"); }, 1000);
// let NewOneWithParameters = (a, b) => {
//   console.log( a + b + ' == number =='); 
//  }
//  NewOneWithParameters(10, 50);
 
//  let SumElements = (arr) => {
//   console.log(arr); // [10, 20, 40, 60, 90]
//   let sum = 0;
//   for (let element of arr) {
//    sum += element;
//   }
//   console.log(sum); // 220
//  }
//  SumElements([10, 20, 40, 60, 90]);

// var map = new Map();
// for (let element of map) {
//  console.log(element);
// }