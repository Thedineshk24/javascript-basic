var greet = function(){
    console.log("function with no name");
}

greet();

console.log(greet); //returns function name in array

x = greet(); // it will not return anything ro variable x so ans is undefined
console.log(x)//undefined
x();// retrun an error => x is not a function

