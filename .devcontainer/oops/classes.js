// // ES6

// class user {
//     constructor(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
//     }
//     encryptpassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//     console.log(`${this.username.toUpperCase()}`);
//     }
    
// }

// const chai = new user("akarsha",'akadotcom.com',123)
// console.log(chai);
// console.log(chai.encryptpassword())
// chai.changeusername()

// BEHIND THE SCENE
function user(username,email,password) {
    this.username = username
    this.email = email
    this.password = password
    
}
user.prototype.encryptpassword = function () {
     return `${this.password}abc`
}
 user.prototype.changeusername = function(){
    console.log(`${this.username.toUpperCase()}`);
 }


const profile = new user("akarsha",'akadotcom.com',123)
console.log(profile);
console.log(profile.encryptpassword())
profile.changeusername()
