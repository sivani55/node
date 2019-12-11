// import { setTimeout } from "timers";

// console.log("Start");

// async function firstAsync() {
//     let promise = new Promise((res, rej) => {
//         setTimeout(() => res("Now it's done!"), 1000)
//     });

//     // wait until the promise returns us a value
//     let result = await promise;

//     // "Now it's done!"
//     console.log("RES::",result);
//     return result;
// }

// firstAsync()
// .then(result => {console.log("resout",result)})
// .catch(err => { console.log("resout",err)});
// console.log("End");


console.log('welcome'); //1st
AsyncFun().then(output =>  {console.log("output ",output)}) //4th
.catch(err => { console.log("error : ",err)});
console.log("end"); //2nd
async function AsyncFun(){
let promise = new Promise((result,reject)=>{
    setTimeout(()=> result("dgfgfgh"),5000)
});
let output = await promise;
console.log('RES::',output); //3rd
return output;
}