
// const fs = require('fs');

// function moreWork(data) {
//   console.log("dat:", data); //second
// }

// console.log('start Asyn'); //first
// fs.readFile('sivani.txt', 'utf-8', (err, data) => {
//   if (err) throw err;

//   console.log("Asyn", data); //fourth
// });
// moreWork('asyn'); // will run before console.log
// console.log('End Async'); //third



const fs = require('fs');
console.log('start Async'); //first
fs.readFile('sivani.txt', 'utf-8' , (err, data) =>{
    if(err) throw err;
    console.log('text file: ',data); //4th
});
moreWork('Async');
console.log('End Async'); //3rd
function moreWork(data){
    console.log('data: ',data); //second
}