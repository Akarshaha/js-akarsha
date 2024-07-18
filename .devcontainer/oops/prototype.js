// let MyArray = ['sachin','virat']

// let MyObj = {
//     username: "akarsha",
//     place: "horatti",
//     Mynative: function () {
//         console.log('my native is ${this.place}');
//     }
// }
// Object.prototype.gunda  = function () {
//     console.log(`gunda is present`);
// }

// MyObj.gunda()
// MyArray.gunda()

// Array.prototype.SayMyName = function () {
//     console.log(`can access only array`);
// }
// MyArray.SayMyName()

// // INHERITANCE

// const teacher = {
//     makevideo: true
// }
// const teachingSupport = {
//     isavailable: false
// }
// const taSupport = {
//     makeAssignment: 'JS Assignment',
//     Fulltime: true,
//     // __proto__:teacher      old way of using inheritance
// }
// console.log(teacher);

// Object.setPrototypeOf(taSupport,teacher)   modernway of using inheritance

 let anotheruser = "horattiboys"

 String.prototype.truelength = function () {
    console.log(`the true length is ${this.trim().length}`);

 }


 anotheruser.truelength()
 "Akarsha gowda".truelength()
