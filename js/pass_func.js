function a(x){
    x();
}

var A = function(){
    console.log('Anonomious function called!');
}


//a();
a(A)
a(function (){
    console.log('anonomious function 2');
})