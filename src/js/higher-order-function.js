
// =============================
// arr.slice([begin[, end]])
// 翻譯：片 切片 部分
// shallow copy
// MDN:https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// =============================
// const months = ['Jan', 'March', 'April', 'June']
// 輸出一個從索引 1 的位置，選擇到索引 2 的陣列物件
// let newMonths = months.slice(1,2) // March
// 輸出一個從索引 1 的位置，選擇到索引 3 的陣列物件
// let newMonths = months.slice(1,3) // March , April
// let newMonths = months.slice(2) // (start from 2) April , June
// console.log(newMonths)

// =============================
// array.splice(start[, deleteCount[, item1[, item2[, ...]]] ])
// 翻譯：拼接
// 藉由刪除既有元素並／或加入新元素來改變一個陣列的內容
// MDN:https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// =============================
// const months = ['Jan', 'March', 'April', 'June']
// months.splice(1, 0, 'Feb'); // Array(5) [ "Jan", "Feb", "March", "April", "June" ]
// console.log(months);
// 從索引 1 的位置開始，刪除 0 個元素並插入「Feb」

// let myFish = ['angel', 'clown', 'drum', 'sturgeon'];
// let removed = myFish.splice(2, 1, 'trumpet');
// console.log(myFish); // ["angel", "clown", "trumpet", "sturgeon"]
// console.log(removed) // ["drum"]
// 從索引 2 的位置開始，刪除 1 個元素並插入「trumpet」

// var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
// var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// console.log(myFish);
// console.log(removed);
// myFish 為 ["parrot", "anemone", "blue", "trumpet", "sturgeon"] 
// removed 為 ["angel", "clown"]
// 從索引 0 的位置開始，刪除 2 個元素並插入「parrot」、「anemone」和「blue」


let i = 0;
let waypts_array = [];
waypts_array[i] = []; // waypts_array[0] = []

waypts_array[i][0] = "this"; // waypts_array[0][0] = "this"
waypts_array[i][1] = "is"; // waypts_array[0][1] = "is"
waypts_array[i][2] = "red"; // waypts_array[0][2] = "red"

waypts_array[i] = waypts_array[i].slice(1, waypts_array[i].length - 1);// waypts_array[0] = waypts_array[i].slice(1 , 2)

console.log(waypts_array[i]); // is


//32 16 8 4 2 1
//      1 0 0 1
//1  0  0 1 0 0  // 36