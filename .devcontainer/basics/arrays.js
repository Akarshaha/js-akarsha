const MyArray = ['a','b','c','d','e'];
console.log(MyArray[3]);
// const NewArray = new Array(1,2,3,4,)
//console.log(NewArray[3]);
//NewArray.push(9);
//console.log(NewArray);
//NewArray.pop();
//console.log(NewArray);
//NewArray.unshift(3);
//console.log(NewArray);
//MyArray.shift();
//console.log(MyArray);
// const NewArray = MyArray.join()
//  console.log(NewArray);
//slice and Splice

const marvel_heroes = ["thor", "spidey","ironman"];
const Dc_heroes = ["batman","superman","flash"];
console.log(marvel_heroes.concat(Dc_heroes).join());
const AnotherArray = [1,2,3, [4,5, [6,7,8, [3,0,7]]]];
const Another_RealArray = AnotherArray.flat(Infinity);
console.log(Another_RealArray);
console.log(Array.isArray("akarsh"));
console.log(Array.from("akarsh"));
console.log(Array.from({name: "akarsha"}));
let score = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score,score2,score3));