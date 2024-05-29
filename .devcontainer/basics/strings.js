const name = 'akarsha'
var regNo = 201;
//console.log(`my name is ${name} my regNo is ${regNo}`);
console.log(name.__proto__);
console.log(name.length);
const Gname = new String("Gunda");
console.log(Gname[3]);
console.log(Gname.toUpperCase());
const G1Name = Gname.substring(1,4)
const G2Name = Gname.slice(-4,2)
const G3Name = "   akhil  ";
console.log(G3Name);
console.log(G3Name.trim());
console.log(G1Name);
console.log(G2Name);
const G4Name = "www.akarsha.com//brookfield//csk";
console.log(G4Name.replace('csk', 'rcb'));
console.log(G4Name.includes('gunda'));
console.log(G4Name.charAt(5));
console.log(G4Name.indexOf('w'));
console.log(G4Name.split('.'));