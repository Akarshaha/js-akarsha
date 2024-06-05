
if (true) {
    let a = 5
    const b = 6
    var c = 7
    
}
// console.log(a);     var only can access the scopes but it may be confusion and create a problem 
// console.log(b);     using var is not a good practice
// console.log(c);


// function one() {
//     const username = "gunda"   always the outerscope can acess inner loop but inner scope will be having no idea what is happenning
// outside the scope 

//     function two() {
//         const email = "aka.com"
//         console.log(username);
        
//     }
//     // console.log(email); here it gives a error because email is inside the scope v can try to run outside 
//    two()  
// }
// one()  this method won't run if there is no two() b/c it is inside of one()


// if (true) {
//     // const name = "akarsh"  same but with the help of if statment
//     if (name === "akarsh") {
//         const lastName = "gowda"
//         console.log(name + lastName);
        
//     }    
    // console.log(lastName);
}
// console.log(name);



// +++++minihoisting++++++++++++++
// console.log(addone(9))   this is a normal function which method can be runned before creating
// function addone(num) {
//    return num + 1
// }


// console.log(addTwo(9))  we will get an error
// const addTwo = function (num) {  even we can store function in a variable 
    // return num + 2   but it can't be initialized before
// }
