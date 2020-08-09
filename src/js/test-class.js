console.log('test class init');
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
//   console.log(newStr);
// }
// const capitalize2 = ([first , ...rest]) =>{
//   console.log(first.toUpperCase() + rest.join('').toLowerCase());
// }

// capitalize('test')
// capitalize2('yayayasafksdjf;sajf')

// array flatten
// =============================
const arr = ['A', ['B', [['B11', 'B12', ['B131', 'B132']], 'B2']], 'C', ['D', 'E', 'F', ['G', 'H', 'I']]];
const flatArray = (arr) => {
  const res = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      const subRes = flatArray(item);
      res.push(...subRes);
    } else {
      res.push(item);
    }
  }
  return res;
};

console.log(flatArray(arr));
