// event loop
// =============================
// console.log('hi');
// setTimeout(function(){
//   console.log('set time out func')
// },5000)
// console.log('event loop')

// event loop training 1
// =============================
// setTimeout(function timeout() {
//   console.log('1')
//   }, 1000)
  
//   setTimeout(function timeout() {
//   console.log('2')
//   }, 1000)
  
//   setTimeout(function timeout() {
//   console.log('3')
//   }, 1000)
  
//   setTimeout(function timeout() {
//   console.log('4')
//   }, 1000)

// event loop training 2
// =============================
// Synchronous
var array = [1,2,3,4];
array.forEach(function (i) {
  console.log(i)
})
console.log('===')
// Asynchronous
function asyncForEach(array) {
  array.forEach(function (i) {
    setTimeout(function(){
      console.log(i)
    }, 0)
  })
}

asyncForEach(array)