// const temp = 22

// if (temp === "22") {
//     console.log(`temp is below 30`);
    
// }else{
// console.log(`temp is above 50`);
// }
// // <,>,<=,>=,==, ===(strict operator)this checks the datatype also, !=, !==(here also it checks datatype)
// const score = 200
// if (score>100) {
//     let power = 'fly'
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); here it doesn't run because power is defined inside the scope and power is not defined outside the scope
const balance =  2000
// if (balance > 1500) console.log(`test`),console.log(`test2`); we can also use this type of syntax writing if statment with code in 
// the same line and no need of using {} but using , inbetween 2 log statments is not a good practice

const userloggedin = true
const debitcard = true

// if (userloggedin && debitcard && balance < 1000) {

//     console.log("allow to acess");    using and($) operator it states any one condition is false it doesn't get inside a loop
                                        //   any one cond. is false its false
// } else {
//     console.log("not allowed");
// // }
// if (userloggedin || debitcard || balance < 1000) {  if any one of the cond is true it results in true cond
//     console.log('allowed');
// }
// else{
//     console.log('not allowed');
// }

// switch and break
// const month = 3 

// switch (month) {
//     case 1:
//         console.log(`jan`);
//         break;
        
//         case 2:
//             console.log(`feb`);      in switch statment using break is must if we not use break once you get output it will print all other output after that case
//             break;                    except default case
//         case 3:
//             // console.log(`march`);    
//             // break;
//         case 4:
//             console.log(`april`);
//             break;
//     default:
//         console.log("not found");
//         break;
// }

// truthy values anf falsy values
// falsy values
// false,0,-0,BigInt 0n, "" ,nan,null,undefined
// truthy values
// "0","false" ," ",[], {},function(){}

// const myarr = []
// if (myarr.length == 0) {
//     console.log('array is empty');
// }

// const myobj ={}
// if (Object.keys(myobj).length == 0) {
//     console.log(`object is empty`);
// }


// nullish coalescing operator(??)
// null and undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 15
// val1 = undefined ?? 20
val1 = null ?? 40 ?? 50

console.log(val1);


// terniary operator

// condition ? true : false

const tvprice = 10000

tvprice > 1000 ? console.log(`greater than 1000`):console.log(`not greater than 1000`);