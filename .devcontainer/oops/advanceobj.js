// let descriptor = Object.getOwnPropertyDescriptor(Math , 'PI')
// console.log(descriptor);

let user = {
    name: 'Akarsha',
    place: 'chikmanglur',
    isloggedin: 'true',

    WorkType: function () {
        console.log("Full time");
    }
}
// console.log(Object.getOwnPropertyDescriptor(user,'name'));
Object.defineProperty(user, 'name',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(user,'name'));

for (let [key,value] of Object.entries(user)) {
    if (typeof value != "function") {
        console.log(`${key}: ${value}`);
    }
   
    
}


