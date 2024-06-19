// const prgm = ['java', 'python', 'php', 'c++', 'ruby']

// const values = prgm.forEach(item => {
//     console.log(item);
    
// });                         In for each loop you can"t store by creating serperate var it runs but you get empty array
// console.log(values);         To overcome this we can use filter,map, and also reduce(in some different manner)

// FILTER
// const nums =[1,2,3,4,5,6,7,8,9]
//  const newval = nums.filter((newitem) => newitem > 4 )   Here we can store in seprate var 
//  console.log(newval);                                    it is also a call back function 
                                                            // it always checks for the cond. to execute
// const newval = nums.filter((newitem) => {
//     return newitem > 5
    
// })
// console.log(newval);

// same while doing foreach

// const newnums = []                             same we can do this in foreach but we need to apply some logics
// nums.forEach((newitem) => {
//     if (newitem > 4) {
//         newnums.push(newitem) 
        
//     }
// })
// console.log(newnums);

// const ipl = [{
//        batsman: 'virat',
//        bowler: 'siraj'
//     },                                     // OBJECTS OF ARRAYS => [{},{},{}]
//     {                                             
//        batsman: 'gaikwad',
//        bowler: 'siraj'
//     },
//     {
//         batsman: 'rohit',
//         bowler: 'bumrha'
//     }]

//     const bcci = ipl.filter((franchise) =>franchise.bowler === 'siraj')
//     console.log(bcci);



    
             // MAPS  // 
             
    // const nums = [1,2,3,4,5,6,7,8,9] 
    // const newnums = nums.map((ele) => ele + 10)      it is same as filter but here it doesn't check for cond 
    // console.log(newnums);  
    
    // chaining
// const newnums = nums.map((val) => val * 10 )
//                      .map((val) => val + 2)
//                      .filter((val) => val > 50)
// console.log(newnums);

// reduce
const nums = [1,2,3,4,5,6,7,8,9]
const initialval = 0
// const total = nums.reduce((accumulator,currval) =>  {         Reduce is also a call back function
//     return accumulator + currval                                this is how it works ,it will be helpful to add every items in array
// },initialval)
// //  console.log(total);
// const total = nums.reduce((accumulator,currval) => accumulator+currval,initialval)
// console.log(total);

const amazoncart = [
    {
        item: 'shoe',
        price: 2999
    },
    {
        item: 'shirt',
        price: 999
    },
    {
        item: 'pant',
        price: 1999
    },
    {
        item: 'watch',
        price: 9999
    }
]
const total = amazoncart.reduce((accumulator,item) => accumulator + item.price , 0 )
console.log(total);


