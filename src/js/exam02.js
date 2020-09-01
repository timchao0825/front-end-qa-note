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
// const array = ['1', 1, '1', 3, '2', 3, '3', 'aaa', 'abc', 'aaa', 4, 5];
// // result = 去除重複的陣列
// function removeDuplicateArray(arr) {
//   // const orgArrLength = arr.length;
//   // console.log('remove dup array func ' + orgArrLength);
//   const uniqArr = [...new Set(arr)];
//   console.log(uniqArr);
//   // const uniqArrLength = uniqArr.length;
//   // console.log(uniqArrLength);
// }
// removeDuplicateArray(array);

// bonus training:
// 求出兩個陣列的差集
// const firstArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const secondArr = [1, 2, 3, 5, 6, 8, 9, 10, 12, '123'];
// function arrayDiff(firstArr, secondArr) {
//   const firstArrLength = firstArr.length;
//   const secondArrLength = secondArr.length;
//   const result = [];
//   for (let i = 0; i < firstArrLength; i++) {
//     if (secondArr.indexOf(firstArr[i]) === -1) {
//       result.push(firstArr[i]);
//     }
//   }
//   for (let i = 0; i < secondArrLength; i++) {
//     if (firstArr.indexOf(secondArr[i]) === -1) {
//       result.push(secondArr[i]);
//     }
//   }
//   console.log(result);
// }

// arrayDiff(firstArr, secondArr);

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
// redux 簡介
// Redux 讓開發者可以在 JavaScript 應用程式建立一個而且唯一的資料管理容器，用來集中式的管理資料，這個資料管理容器又稱為 Store (倉庫)，主要由 State、Action、Reducer 組成，讓我們先來暸解它們在 Redux 的架構中分別扮演的角色以及彼此之間的關係。

// redux 三大元件和三大原則
// 三大元件：
// 1.action: 描述發生的事件類別(type) ，以及所承載的資訊(payload) 。
// 2.reducer: 一個函式，負責將給定的 state 根據給定的 action 做變化而得到新的 state。
// 3.store: 整個 Redux 運作的核心，負責儲存整個 state tree，每個專案只會有一個 store。

// 三大原則：
// 1.唯一資訊來源：整個專案的 state，被儲存在一個樹狀物件放在唯一的 store 裡面。
// 2.State 是唯讀的：改變 state 的唯一的方式是發出一個 action，也就是一個描述發生什麼事的物件。
// 3.變更被寫成 pure function：要指定 state tree 如何藉由 action 來轉變，你必須撰寫 pure reducer。

// 6. react生命週期
// 7. 作用域考題
// 考題內容 js function 預設參數

// 8. 是否寫過測試
// 9. 描述pure function
// 10. 描述同步與非同步
