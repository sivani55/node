let num = 5;

var result = mainfun(10, fact);
console.log('result');
function mainfun(x, fact){
    console.log('main function');
    return fact(num);
}
function fact(num){
    
    if(num>=1){
        return num * fact(num-1);
        }
    else
    return 1;
}
console.log(result);