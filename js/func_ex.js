var Arr=['black','blue'];

function a(x){
    for(item of Arr){
        x(item);
    }
}

a( function(i){
    console.log(i);
});