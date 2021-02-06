const person = {name:'jack', age: '12', address: 'kokhuket' , phone: '0176572722', gfName:'ema watson'};
 const {phone,gfName,address} = person
// const gfName = person.gfName;
// console.log(gfName,phone,address);
// console.log(gfName);
// console.log(gfName);
// console.log(gfName);
const friends = ['amir khan','sakib khan','manna khan','abdul khan','mostafir khan'];
const[first,...restfriend] = friends;
console.log(first,restfriend);