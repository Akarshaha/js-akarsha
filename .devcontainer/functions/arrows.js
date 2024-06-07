// const user = {                             this keyword refers current object
//     username: "aka",                        
//     gmail: "akag.com",
//     welcomemessage: function(){               having function in object
//         console.log(`${this.username}, welcom to mail`)     
//         console.log(this);                     this will give output of full object data
//     }

// }
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
//  console.log(this);            this will give output of {}

// function one() {           we can use "this" only  inside object if we try it inside function without object it will 
//     const first = 1        give output as undefined
//     console.log(this.first);
    
// }
// one()

// const two = function () {
//     const second = 2
//     console.log(this.second);  same scenerio as above
//     }
// two()

//  const three = () => {       //arrow function syntax 
    //  const third = 3             
    //  console.log(this.third);     even in arrow function "this"  keyword  will give as undefined
      //   }                          so, in arrow function "this" keyword is not used
// three()

// const four = (num1,num2) => {        arrow function will give output same as normal function but the syntax is different
    // return num1 + num2

// }
// console.log(four(3,5));

// const five = (num3,num4) => (num3 + num4)   In arrow function we can remove {} then using return keyword is not required, we can use 
// console.log(five(5,5));                      () for statment

// const six = () => ({MyName: "gunda"}        In arrow function we can use object also should be inside a ({})
// console.log(six());