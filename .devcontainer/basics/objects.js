// // litterals

// const mysym = Symbol("myval") //symbol
// const juser = {
//     name: "gunda",
//     [mysym]: "mykey1", //having [] is must for symbol in keys
//     Age: 23,
//     "email":"akarshagowda2017@gmail",
//     city: "banglore"
// }
// console.log(juser.city);
// console.log(juser["email"]); //we can use both [] and . but while using [] " "is must and [] will be helpful when keys are in " "
// console.log(juser.email); //best way to use is []
// console.log(mysym);
// juser.city= "chikmangloe" // we can change the value by using =
// //  Object.freeze(juser) v can freeze the object(objects can't be altered)
// juser.Age = 18
// console.log(juser);
// juser.greeting = function(){
//     console.log("hello I'm juser"); // we can create a function using function() (IMP)
// }
// console.log(juser.greeting());
// console.log(juser.greeting);
// juser.greeting2 = function(){
//     console.log(`hello im juser, my name is ${this.name}` );we can use this. to get the value from same object
// }
// console.log(juser.
//     greeting2());

    // singleton

     const facebookuser = new Object() //singelton object
    // console.log(facebookuser);
   facebookuser.id = "G123",
    facebookuser.FirstName = "guru"
    facebookuser.city = "brookfield"
//     console.log(facebookuser);

    // const reguser = {             nested values
//         email: "aka.com",
//         username: {
//             fullname:{
//                 firstname: "aka",
//                 lastname: "gow"
//             }
//         } 
//     }
// console.log(reguser["username"].fullname.firstname); (IMP)


// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"c", 4:"d"}
// // const obj3 = Object.assign({},obj1 , obj2)  MERGING 2 OBJECT (Syntax is imp)
// const obj3 = {...obj1,...obj2} MERGING 2 OBJECT (both assign and spreading can be used)
// console.log(obj3);
// const users = [         we can store objects inside of array
//     {
//         id: "a1"
//     },
//     {
//         id: "a2"
//     },{
//         id: "a3"
//     }
// ]
// // console.log(users[2]);
// console.log(facebookuser);
// console.log(Object.keys(facebookuser));
// console.log(Object.values(facebookuser));
// console.log(Object.entries(facebookuser));
// console.log(facebookuser.hasOwnProperty('city')); all these functions are IMP


// destructure
const {FirstName: name} = facebookuser 
console.log(name);