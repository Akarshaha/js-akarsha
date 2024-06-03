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
// console.log(loginusermessage("ashik"))
// function calculatecartprice(val1,val2, ...item) {    //we can use spread operator(...) when taking more inputs
    // return item;                                      it will store in arrays
    
}
// console.log(calculatecartprice(11,100,200,340));


const user = {
    product: "car",
    price:5000
}


// function handleobject(anyobject) {                //syntax and example for using function for objects
    // console.log(`product is ${anyobject.product} and price is ${anyobject.price}`);
    
// }
 handleobject(user)
// handleobject({                we can also add/create object while calling the function only
//     product: "bike",
//     price: 2500
// })
// const aka = ['a','b','c','d']
// const mynewarray = [200,23,34,45,67]


// function getarray(my2val) {               syntax and example for using functions for arrays(IMP)
//     return my2val[2];
    
// }
console.log(getarray(mynewarray));
console.log(getarray(aka));

console.log(getarray([
    1,2,3,4,5,6
]))