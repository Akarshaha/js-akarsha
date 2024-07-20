// class user {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     get password(){
//      return `${this._password.toUpperCase()}`
//     }
//     set password(value){
//       this._password = value
//     }

//     get email(){
//         return `${this._email.toUpperCase()}`
//     }
//     set email(value){
//         this._email = value
//     }


// }

// const Tea = new user("akarsha","aka.com","abc")
// console.log(Tea.password);
// console.log(Tea.email);



// OLD WAY

// function User(email, password){
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })

// }

// const chai = new User("aka.com", "don")

// console.log(chai.email);


// OBJECT BASED GETTER setTER

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);