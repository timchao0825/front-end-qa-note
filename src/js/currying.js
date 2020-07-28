$(document).ready(function(){
  console.log('curring js init')

  function multiply(x, y){
    return x * y;
  }
  console.log(multiply(3, 5)); // 15
  
  function curriedMultiply(x){
    return function(y){
      return x * y;
    }
  }
  let a = curriedMultiply(3)(10)
  console.log(a);

  // function curriedMultiply(a) {
  //   return (b) => {
  //       return (c) => {
  //           return a * b * c
  //       }
  //   }
  // }
  // console.log(curriedMultiply(1)(2)(3)) // 6

});