// for in loop
// for of loop
// for each loop


// for off loop
// const arr = [1,2,3,4,5]

// for (const i of arr) {
//     console.log(i);
    
// }
// const greetings = "whistle podu"
// for (const ch of greetings) {
//     console.log(ch);
// }

// Maps

const map = new Map()
map.set('IN' , 'India')
map.set('usa', 'united states')
map.set('fr' , 'france')
// // console.log(map);

 for (const [key,value] of map) {
     console.log(key +':'+ value);
    
 }


// objects are not iterable using for off loop

// for in loop
const MyObj = {
    core: "java",
    frontend: "html",
    backend: "sql"

}
//  for (const key in MyObj) {                                 
//     console.log(`${key} is ${MyObj[key]}`);        IMP TO UNDERSTAND
    
//  }

// for array

// const prg = ['cpp','js','java','python']

// for (const key in prg) {            using variable name is must while fetching the 'value' in both objects and arrays
    // console.log(prg[key]);           if not in objects we get 'key', and in arrays we get index
// }


// for (const key in map) {   maps in for in loop not possible
// console.log(key);
// }