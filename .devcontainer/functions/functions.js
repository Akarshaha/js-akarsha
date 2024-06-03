// function saymyname(){   this is the syntax for using function
//     console.log('a');
//     console.log('b');
//     console.log('c');
// }
// // saymyname()
// function AddTwoNum(num1,num2){
//     console.log(num1 + num2);
// }
// // const result = AddTwoNum(3,4); here add function will add but it can't store in result var
// function AddTwoNum(num1,num2){
//     // let result = num1 + num2 ;
//     return num1 + num2;  once you use return, next lines won't work in block
//     // console.log("ajay");
// }
// const result = AddTwoNum(9,5);

// console.log(result);

function loginusermessage(username) {  //we can also set username as default by setting username = "aka"
    if (username === undefined) {     // we can also write if(!username); both are same 
        console.log("please enter a name");
        return                           // once we return here further instructions don't work
        
    }
    return `${username} just logged in`
} 
console.log(loginusermessage("ashik"))