$(document).ready(function(){
// test 1
// function printStar(int){
//   let str = "";
//   for (let i = 0; i < int; i++) {
//     str +="*\n"
//   }
//   console.log(str);
// }
// printStar(5);

// test 2

// function capitalize(str){
//   let newStr = str.charAt(0).toUpperCase() + str.slice(1);
// }
const capitalize2 = ([first , ...rest]) =>{
  console.log(first.toUpperCase() + rest.join('').toLowerCase());
}

// capitalize('test')
// capitalize2('yayayasafksdjf;sajf')

// ------- end doc
});