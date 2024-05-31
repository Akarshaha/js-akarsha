let MyDate = new Date();
console.log(MyDate);
console.log(MyDate.toDateString());
console.log(MyDate.toLocaleDateString());
console.log(MyDate.toLocaleString());
console.log(typeof MyDate);
let MycreatedDate = new Date(2023,01,14,5,15);
console.log(MycreatedDate.toDateString());
console.log(MycreatedDate.getTime());
let TimeStamp = Date.now();
console.log(TimeStamp);
console.log(MyDate.getMonth() + 1);
console.log(MyDate.getMinutes());
console.log(MyDate.toLocaleString('default', {
    weekday: "long"
}))