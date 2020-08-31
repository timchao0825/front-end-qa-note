console.log('exam02 js import');

// 1. fizz buzz (費氏數列)
// Topic
// 透過一個 fizzBuzz 函式，裡面代入參數 num
// 會輸出從 1 ~ num 的數值
// 但若這個輸出的數值是 3 的倍數，則輸出 fizz
// 但若這個輸出的數值是 5 的倍數，則輸出 buzz
// 但若這個輸出的數值同時是 3 和 5 的倍數，則輸出 fizzBuzz

// recursive fizz buzz
// function recursiveFizzBuzz(num) {
//   // normal %15
//   // for (let i = 1; i <= num; i++) {
//   //   if (i % 15 === 0) {
//   //     console.log(`FizzBuzz ==> ${i}`);
//   //   } else if (i % 3 === 0) {
//   //     console.log(`Fizz ==> ${i}`);
//   //   } else if (i % 5 === 0) {
//   //     console.log(`Buzz ==> ${i}`);
//   //   } else {
//   //     console.log(i);
//   //   }
//   // }
//   // advance
//   for (let i = 1; i <= num; i++) {
//     const f = i % 3 === 0;
//     const b = i % 5 === 0;
//     console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
//   }
// }
// recursion fizz buzz
// function recursionFizzBuzz(num) {
//   const fizz = num % 3 === 0;
//   const buzz = num % 5 === 0;
//   console.log(fizz ? (buzz ? 'FizzBuzz' : 'Fizz') : buzz ? 'Buzz' : num);
//   if (num !== 0) {
//     return recursionFizzBuzz(num - 1);
//   }
// }

// recursiveFizzBuzz(100);
// recursionFizzBuzz(100);

// 2. 去除重複的array
const array = ['1', 1, '1', 3, '2', 3, '3', 'aaa', 'abc', 'aaa', 4, 5];
// result = 去除重複的陣列

function removeDuplicateArray(arr) {
  const orgArrLength = arr.length;
  console.log('remove dup array func ' + orgArrLength);
  const uniqArr = [...new Set(arr)];
  const uniqArrLength = uniqArr.length;
  console.log(uniqArr);
  console.log(uniqArrLength);
}
removeDuplicateArray(array);

// 3. null, undefined, undeclared
// null = 變數被定義，值為空值
// undefined = 變數被定義，未給予值
// undeclared = 變數未定義，未有值；判斷為undeclared

// 4. 遞迴 10 ~ 0
// recursive 10 ~ 0
// 0 ~ 10
// for (let i = 0; i <= 10; i++) {
// console.log(i);
// }
// 10 ~ 0
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// function recursionFor10(num) {
//   console.log(num);
//   if (num !== 0) {
//     return recursionFor10(num - 1);
//   }
// }
// recursionFor10(10);
// IIFE
// (function test(num = 100) {
//   console.log('test function' + num);
// })();

// 5. 描述redux

// 6. react生命週期
// 7. 作用域考題
// js function 預設參數

// 8. 是否寫過測試
// 9. 描述pure function
// 10. 描述同步與非同步
