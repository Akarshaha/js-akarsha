// const promiseone = new Promise(function (resolve, reject) {
//     // do an asych tasks , DB calls, cryptography, networking
//     setTimeout(function () {
//         console.log("asynch completed");
//         resolve()
//     },1000)
// })

// promiseone.then(function () {
//     console.log("promise consumed");
// })

// new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         console.log("asych2 completed");
//         resolve()
//     })
// }).then(function () {
//     console.log("promise consumed");
// })

// const promiseThree = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         resolve( {username: 'Gunda', email: 'Gunda.com'})
//     },1000)
    
// }) 
//  promiseThree.then(function (user) {
//     console.log(user);
//  })

//  const promisefour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (!error) {
//             resolve({username: 'akarsha', email: 'gowda.com'})
            
//         } else {
//             reject('Error : Something went wrong')
            
//         }
//     })
    
//  })
//   promisefour.then(function (user) {
//     console.log(user);
//     return user.username;
//   }).then(function (username) {
//     console.log(username);
//   }).catch(function (error) {
// console.log(error);    
//   }).finally(() => console.log('promise is resolved or rejected'))


// //   ****  ASYCH AWAIT FUNCTION **** ///
// const promisefive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({username: 'raina', email: 'MR.IPL.com'})
            
//         } else {
//             reject('Error : Something went wrong')
            
//         }
//     })
    
//  })

//  async function consumepromisefive() {
//   try {
//     const response = await promisefive
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }    
//  }
//  consumepromisefive()



//  async function leouser() {
//    try {
//     const newResponse = await fetch("https://jsonplaceholder.typicode.com/users")
// // console.log(newResponse);
// const data = await newResponse.json()
// console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
//  }
//  leouser()



// fetch("https://jsonplaceholder.typicode.com/users")
// .then((rex) => {
//     return rex.json()
// }).then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))
