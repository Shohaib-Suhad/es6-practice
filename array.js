// function doubleIt(num){
//   return num*2;
// } 
// const doubleIt = function(num){
//   return num*2;
// }
const doubleIt = num => num*2;
const sum = (x,y) => x+y;
const  give5 = () => 5;
const doMath = (x,y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
}
const result = give5();
const result3 = doMath();

console.log(result3);