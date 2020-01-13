var myColors = new Array ('blue','orange','yellow');

myColors.forEach(function (item) {
    console.log(item);
});

var superHeros = ['batman','spiderman','ironman','doctorStrang'];
function myFunction(myvar){
    console.log(myvar);
}

superHeros.forEach(myFunction);

var anotherFunction = function(item){
    console.log(item);
};

myColors.forEach(anotherFunction);

