// class user {
//     constructor(username){
//         this.username = username
//     }
//     logMe(){
//         console.log(`username is ${this.username}`);
//     }
// }
// class teacher extends user {
//     constructor(username,email,password){
//     super(username)
//     this.email = email
//     this.password = password
// }
//     addcourse(){
//         return console.log(`A new course was added by ${this.username}`);
//     }
// }
// const data = new teacher('manoj','manoj..com',123)
// data.addcourse()

// const name = new user("Gunda")
// name.logMe()

// console.log(data instanceof user);
// console.log(data instanceof teacher);


// static property
    class user {
            constructor(username){
                this.username = username
            }
            logMe(){
                console.log(`username is ${this.username}`);
            }
             static createid(){
                console.log(`123`);
            }
        }

        const data = new user('akarsha')
        // data.createid()     as creatid is static it is not a function 

