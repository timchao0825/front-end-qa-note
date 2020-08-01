console.log('function call js init');


function swap(a, b) {
  // call by value or pass by value
  var temp = a;
  a = b;
  b = temp;
}

var x = 10;
var y = 20;
swap(x, y);
console.log(x, y) // 10, 20




function addCallBySharing(obj) {
  obj.number++
}
var a = {number: 10}
addCallBySharing(a)
console.log('call by sharing' , a.number) // 11


function addCallbyValue(obj) {
  // 讓 obj 變成一個新的 object
  obj = {
    number: obj.number + 1
  }
}

var b = {number: 10}
addCallbyValue(b)
console.log('call by value' , b.number) // 10